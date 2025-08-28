import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import type { DropdownProps } from '@/components/Dropdown/DropdownInterfaces'

function TestDropdown<T>(props: Partial<DropdownProps<T>>) {
  const [valueIndex, setValueIndex] = useState(0)
  const value = props.options ? props.options[valueIndex]?.value : undefined
  return <Dropdown onChange={setValueIndex} {...props} value={value} />
}

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
]

describe('Dropdown', () => {
  it('renders trigger and options', () => {
    render(
      <TestDropdown options={options}>
        <span>Trigger</span>
      </TestDropdown>
    )
    expect(screen.getByText('Trigger')).toBeInTheDocument()
  })

  it('shows options when trigger is clicked', async () => {
    render(
      <TestDropdown options={options}>
        <span>Trigger</span>
      </TestDropdown>
    )
    await userEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onChange when option is clicked', async () => {
    const handleChange = jest.fn()
    render(
      <TestDropdown options={options} onChange={handleChange}>
        <span>Trigger</span>
      </TestDropdown>
    )

    await userEvent.click(screen.getByText('Trigger'))
    await userEvent.click(screen.getByText('Option 2'))
    expect(handleChange).toHaveBeenCalledWith(1)
  })

  it('closes when clicking outside', async () => {
    render(
      <TestDropdown options={options}>
        <span>Trigger</span>
      </TestDropdown>
    )

    await userEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Option 1')).toBeInTheDocument()

    await userEvent.click(document.body)
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
  })

  it('shows empty state if no options', async () => {
    render(
      <TestDropdown options={[]}>
        <span>Trigger</span>
      </TestDropdown>
    )
    await userEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText(/No options found/i)).toBeInTheDocument()
  })
  it('closes panel on scroll on mobile', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    })
    render(
      <TestDropdown options={options}>
        <span>Trigger</span>
      </TestDropdown>
    )
    await userEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Option 1')).toBeInTheDocument()

    await act(async () => {
      document.dispatchEvent(new Event('scroll'))
    })

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    })
  })
  it('should not close when scrolling inside the panel', async () => {
    render(
      <TestDropdown options={options}>
        <span>Trigger</span>
      </TestDropdown>
    )
    await userEvent.click(screen.getByText('Trigger'))
    const panel = screen.getByRole('listbox')
    expect(panel).toBeInTheDocument()

    panel.dispatchEvent(new Event('scroll', { bubbles: true }))

    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })
})
