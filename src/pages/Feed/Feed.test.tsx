import { render } from '@/__tests__/utils.test'
import { Feed } from '@/pages/Feed/Feed'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

describe('Feed', () => {
  it('should render', () => {
    render(<Feed />)

    expect(screen.getByTestId('feed')).toBeInTheDocument()
  })

  it('Should filter by category', async () => {
    window.innerWidth = 500

    render(<Feed />)

    const categoryButton = screen.getByRole('button', { name: 'Category' })

    await userEvent.click(categoryButton)

    const category1Button = screen.getByRole('button', { name: 'Category 1' })
    const category2Button = screen.getByRole('button', { name: 'Category 2' })

    expect(category1Button).toBeInTheDocument()
    expect(category2Button).toBeInTheDocument()

    await userEvent.click(category1Button)

    const postsFilteredByCategory1 = screen.getAllByTestId('feed-card')

    postsFilteredByCategory1.forEach((post) => {
      expect(post).toHaveTextContent('Category 1')
    })
  })
})
