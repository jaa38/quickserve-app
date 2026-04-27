// src/services/storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = 'biometrics_enabled'

export const enableBiometrics = async () => {
  await AsyncStorage.setItem(KEY, 'true')
}

export const isBiometricsEnabled = async () => {
  const value = await AsyncStorage.getItem(KEY)
  return value === 'true'
}