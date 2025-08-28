import { screen, fireEvent } from '@testing-library/react'
import { Image } from './Image'
import { render } from '@/__tests__/utils.test'

const fallback = '/images/imageFallback.svg'
const validSrc = 'https://via.placeholder.com/150'
const invalidSrc = 'invalid-url.jpg'

describe('Image', () => {
  it('render with src', () => {
    render(<Image src={validSrc} alt='test' />)
    const img = screen.getByAltText('test')
    expect(img).toHaveAttribute('src', validSrc)
  })

  it('render with fallback if src is missing', () => {
    render(<Image alt='test' />)
    const img = screen.getByAltText('test')
    expect(img).toHaveAttribute('src', fallback)
  })

  it('render with fallback if src fails to load', () => {
    render(<Image src={invalidSrc} alt='test' />)
    const img = screen.getByAltText('test')
    fireEvent.error(img)
    expect(img).toHaveAttribute('src', fallback)
  })

  it('should not set fallback if already fallback', () => {
    render(<Image src={fallback} alt='test' />)
    const img = screen.getByAltText('test')
    fireEvent.error(img)
    expect(img).toHaveAttribute('src', fallback)
  })
})
