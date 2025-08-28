import { render, screen } from '@testing-library/react'
import { DropdownText } from './DropdownText'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import type { DropdownTextProps } from '@/components/DropdownText/DropdownTextInterfaces'

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
]

function TestDropdownText<T>(props: Partial<DropdownTextProps<T>>) {
  const [valueIndex, setValueIndex] = useState(0)
  const valueLabel = options[valueIndex].label

  return (
    <DropdownText
      {...props}
      valueIndex={valueIndex}
      onChange={setValueIndex}
      Icon={FaChevronDown}
      options={options}
      valueLabel={valueLabel}
    >
      {props.children}
    </DropdownText>
  )
}

describe('DropdownText', () => {
  function setup(props = {}) {
    return render(<TestDropdownText {...props}>LabelText</TestDropdownText>)
  }

  it('shows the value label', () => {
    setup()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('shows the icon', () => {
    setup()
    expect(screen.getByTestId('dropdown-icon')).toBeInTheDocument()
  })

  it('shows the children label only on desktop', () => {
    // Simulate desktop
    window.innerWidth = 1200
    setup()
    expect(screen.getByText('LabelText')).toBeInTheDocument()
  })

  it('does not show the children label on mobile', () => {
    // Simulate mobile
    window.innerWidth = 500
    setup()
    expect(screen.queryByText('LabelText')).not.toBeInTheDocument()
  })
})
