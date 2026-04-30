import { saveToken, getToken, removeToken } from '../../QuickServe/src/services/auth'

jest.mock('expo-secure-store', () => ({
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}))

import * as SecureStore from 'expo-secure-store'

describe('Auth Service', () => {
  it('stores token', async () => {
    await saveToken('test_token')

    expect(SecureStore.setItemAsync).toHaveBeenCalledWith(
      'auth_token',
      'test_token'
    )
  })

  it('retrieves token', async () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue('test_token')

    const token = await getToken()

    expect(token).toBe('test_token')
  })

  it('removes token', async () => {
    await removeToken()

    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('auth_token')
  })
})