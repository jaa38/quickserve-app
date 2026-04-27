import * as SecureStore from 'expo-secure-store'

// 🔐 Store token securely
export const saveToken = async (token: string): Promise<void> => {
  await SecureStore.setItemAsync('auth_token', token)
}

// 🔍 Get token
export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('auth_token')
}

// ❌ Remove token (logout)
export const removeToken = async (): Promise<void> => {
  await SecureStore.deleteItemAsync('auth_token')
}