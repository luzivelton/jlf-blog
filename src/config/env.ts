const fixURL = (url: string | undefined) => url && url.replace(/\/+$/, '') + '/'

const DWS_API_URL = 'https://tech-test-backend.dwsbrazil.io'
const VITE_DEV_API_URL = fixURL(import.meta.env.VITE_DEV_API_URL)

export const API_URL = VITE_DEV_API_URL || DWS_API_URL
