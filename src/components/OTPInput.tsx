// src/components/OTPInput.tsx

import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInput as RNTextInput,
  Animated,
} from "react-native";
import { theme, spacing, typography, colors } from "../themes";

// --------------------------------------
// Types
// --------------------------------------

interface Props {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

// --------------------------------------
// Component
// --------------------------------------

export const OTPInput: React.FC<Props> = ({
  length = 6,
  value,
  onChange,
  error,
}) => {
  const inputs = useRef<RNTextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    const cleanText = text.replace(/[^0-9]/g, "");

    // ✅ If user pastes full code
    if (cleanText.length === length) {
      onChange(cleanText);
      return;
    }

    // Normal typing
    const newValue = value.split("");
    newValue[index] = cleanText;

    const finalValue = newValue.join("").slice(0, length);
    onChange(finalValue);

    if (cleanText && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [error]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: shakeAnim }],
      }}
    >
      <View style={styles.container}>
        {Array.from({ length }).map((_, index) => {
          const isFocused = focusedIndex === index;

          return (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputs.current[index] = ref;
              }}
              value={value[index] || ""}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType="number-pad"
              maxLength={1}
              style={[
                styles.input,

                // 🔥 ACTIVE STATE
                isFocused && {
                  backgroundColor: colors.blue[100],
                  borderColor: colors.blue[600],
                  borderWidth: 1.5,
                },

                // ❌ ERROR STATE
                error && {
                  borderColor: theme.border.error,
                },

                // DEFAULT STATE
                !isFocused &&
                  !error && {
                    borderColor: theme.border.inputTextfield,
                  },

                {
                  color: isFocused ? colors.blue[600] : theme.text.primary,
                },
              ]}
            />
          );
        })}
      </View>
    </Animated.View>
  );
};

// --------------------------------------
// Styles
// --------------------------------------

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center", // 🔥 center everything
    alignItems: "center",
    gap: spacing.md, // 🔥 consistent spacing
    marginTop: spacing["2xl"],
  },

  input: {
    width: 48,
    height: 56,

    borderWidth: 1,
    borderRadius: theme.radius.lg,

    textAlign: "center",

    ...typography["heading-sm"],
    backgroundColor: theme.background.surface,
  },
});
