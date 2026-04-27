// src/components/FeatureCard.tsx

import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { theme } from '../themes'

// --------------------------------------
// Types
// --------------------------------------

interface Props {
  children: React.ReactNode
  fullWidth?: boolean
  style?: ViewStyle
}

// --------------------------------------
// Component
// --------------------------------------

export const FeatureCard: React.FC<Props> = ({
  children,
  fullWidth = true,
  style,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          width: fullWidth ? '100%' : undefined,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

// --------------------------------------
// Styles
// --------------------------------------

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 16,

    borderRadius: theme.radius.lg,
    backgroundColor: theme.background.surface,

    // 🔥 Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // 🔥 Shadow (Android)
    elevation: 3,
  },
})