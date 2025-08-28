import '@testing-library/jest-dom'

jest.mock('@/config/env', () => {
  return {
    API_URL: 'https://tech-test-backend.dwsbrazil.io/',
  }
})
