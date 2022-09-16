import type {ResponseDataType} from './types'
const API_CONFIG = {
  headers: {
    'Content-Type': 'Application/json'
  }
}
const data_url = './data.json'
export async function fetchData(): Promise<ResponseDataType> {
  try {
    const response = await fetch(data_url, API_CONFIG)
    return response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}
