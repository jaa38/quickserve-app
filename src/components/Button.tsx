import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { theme, typography } from '../themes';

// --------------------------------------
// Types
// --------------------------------------

type Variant = 'primary' | 'secondary' | 'success';
type Size = 'lg' | 'md' | 'sm';

interface Props {
  title: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

// --------------------------------------
// Size Config
// --------------------------------------

const sizeStyles = {
  lg: {
    height: 56,
    text: typography['button-lg'],
  },
  md: {
    height: 48,
    text: typography['button-md'],
  },
  sm: {
    height: 40,
    text: typography['button-sm'],
  },
};

// --------------------------------------
// Component
// --------------------------------------

export const Button: React.FC<Props> = ({
  title,
  variant = 'primary',
  size = 'md',
  fullWidth = true,
  onPress,
  disabled = false,
  style,
}) => {
  const buttonVariant = theme.buttons[variant];
  const sizeConfig = sizeStyles[size];

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          height: sizeConfig.height,

          backgroundColor: disabled
            ? theme.buttons.disabled.background
            : pressed && buttonVariant.pressed
            ? buttonVariant.pressed
            : buttonVariant.background,

          borderColor: buttonVariant.border,
          borderWidth: buttonVariant.border ? 1 : 0,

          width: fullWidth ? '100%' : undefined,

          opacity: pressed ? 0.9 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          sizeConfig.text as TextStyle,
          {
            color: disabled
              ? theme.buttons.disabled.text
              : buttonVariant.text,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

// --------------------------------------
// Styles
// --------------------------------------

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: theme.spacing['2xl'],
    paddingVertical: theme.spacing.lg,

    borderRadius: theme.radius.lg,
  },
});