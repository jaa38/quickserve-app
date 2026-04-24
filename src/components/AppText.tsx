// src/components/AppText.tsx

import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import { typography, theme } from '../themes'

// --------------------------------------
// Types
// --------------------------------------

type Variant = keyof typeof typography

type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'inverse'
  | 'success'
  | 'error'
  | 'warning'
  | 'link'

type Props = TextProps & {
  variant?: Variant
  color?: TextColor
  style?: TextStyle | TextStyle[]
}

// --------------------------------------
// Helper
// --------------------------------------

const getTextColor = (color?: TextColor) => {
  if (!color) return theme.text.primary

  return theme.text[color]
}

// --------------------------------------
// Component
// --------------------------------------

const AppText: React.FC<Props> = ({
  variant = 'body-md',
  color,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        typography[variant],
        { color: getTextColor(color) },
        style,
      ]}
      {...props}
    />
  )
}

export default AppText