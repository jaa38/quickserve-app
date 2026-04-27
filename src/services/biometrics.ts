// src/services/biometrics.ts

import * as LocalAuthentication from 'expo-local-authentication'

export const checkBiometricsSupport = async () => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync()
  const isEnrolled = await LocalAuthentication.isEnrolledAsync()

  return hasHardware && isEnrolled
}

export const authenticate = async () => {
  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Authenticate with biometrics',
    fallbackLabel: 'Use passcode',
    disableDeviceFallback: false,
  })

  return result.success
}