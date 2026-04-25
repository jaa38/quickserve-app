import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  ViewStyle,
} from 'react-native';

import AppText from './AppText';
import { theme, spacing, typography } from '../themes';
import { useCountry } from '../hooks/useCountry';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onPressCountry?: () => void;
  style?: ViewStyle;
}

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  const parts = [];
  if (digits.length > 0) parts.push(digits.slice(0, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 7));
  if (digits.length > 7) parts.push(digits.slice(7, 11));

  return parts.join(' ');
};

export const PhoneInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder = '0803 555 1180',
  error,
  disabled = false,
  onPressCountry,
  style,
}) => {
  const { country } = useCountry();

  const handleChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    onChange(formatted);
  };

  const borderColor = error
    ? theme.border.error
    : theme.border.default;

  return (
    <View style={style}>
      <View style={styles.row}>
        {/* Prefix */}
        <Pressable
          onPress={onPressCountry}
          style={[styles.prefix, { borderColor }]}
        >
          <AppText>{country.dialCode}</AppText>
        </Pressable>

        {/* Input */}
        <TextInput
          value={value}
          onChangeText={handleChange}
          editable={!disabled}
          keyboardType="number-pad"
          placeholder={placeholder}
          placeholderTextColor={theme.text.muted}
          style={[
            styles.input,
            {
              borderColor,
              backgroundColor: disabled
                ? theme.background.secondary
                : theme.background.surface,
            },
          ]}
        />
      </View>

      {error && (
        <AppText
          variant="caption"
          color="error"
          style={{ marginTop: spacing.xs }}
        >
          {error}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prefix: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.background.surface,
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    ...typography['body-md'],
    color: theme.text.primary,
  },
});