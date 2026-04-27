import { getToken } from './auth'

export const apiCall = async (endpoint: string) => {
  const token = await getToken()

  const response = await fetch(endpoint, {
    method: 'GET', // can extend later
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}