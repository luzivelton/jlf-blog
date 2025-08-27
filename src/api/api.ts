import axios from 'axios'
import { API_URL } from '@/config/env'

export const api = axios.create({
  baseURL: `${new URL(API_URL).href}api/`,
  headers: {
    'Content-Type': 'application/json',
  },
})
