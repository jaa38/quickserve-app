// src/components/Input.tsx

import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native'
import AppText from './AppText'
import { theme, typography } from '../themes'

// --------------------------------------
// Types
// --------------------------------------

type Size = 'lg' | 'md' | 'sm'

interface Props extends TextInputProps {
  label?: string
  error?: string
  disabled?: boolean
  size?: Size
  fullWidth?: boolean
  style?: ViewStyle
  textStyle?: TextStyle | TextStyle[]
}

// --------------------------------------
// Size Config
// --------------------------------------

const sizeStyles = {
  lg: {
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  md: {
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  sm: {
    height: 40,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
}

// --------------------------------------
// Component
// --------------------------------------

const Input: React.FC<Props> = ({
  label,
  error,
  disabled = false,
  size = 'md',
  fullWidth = true,
  style,
  textStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const sizeConfig = sizeStyles[size]

  const getBorderColor = () => {
    if (error) return theme.border.error
    if (isFocused) return theme.border.focus
    return theme.border.inputTextfield
  }

  return (
    <View style={{ width: fullWidth ? '100%' : undefined }}>
      {/* Label */}
      {label && (
        <AppText
          variant="label"
          style={{
            marginBottom: theme.spacing.xs,
            color: theme.text.secondary,
          }}
        >
          {label}
        </AppText>
      )}

      {/* Input Field */}
      <TextInput
        editable={!disabled}
        placeholderTextColor={theme.text.muted}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          {
            height: sizeConfig.height,
            paddingVertical: sizeConfig.paddingVertical,
            paddingHorizontal: sizeConfig.paddingHorizontal,

            borderColor: getBorderColor(),
            backgroundColor: disabled
              ? theme.background.secondary
              : theme.background.surface,

            opacity: disabled ? 0.6 : 1,
          },
          textStyle, // ✅ text styling
          style,     // ✅ container overrides
        ]}
        {...props}
      />

      {/* Error */}
      {error && (
        <AppText
          variant="caption"
          color="error"
          style={{ marginTop: theme.spacing.xs }}
        >
          {error}
        </AppText>
      )}
    </View>
  )
}

export default Input

// --------------------------------------
// Styles
// --------------------------------------

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    color: theme.text.primary,
    ...typography['body-md'],
  },
})