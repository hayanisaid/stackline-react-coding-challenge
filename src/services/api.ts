import type {ResponseDataType} from './types'
const API_CONFIG = {
  headers: {
    'Content-Types': 'Application/json'
  }
}
const data_url = './data.json'
export async function fetchData(): Promise<ResponseDataType> {
  try {
    const response = await fetch(data_url)
    return response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}
