// src/theme/theme.ts

import { colors } from './colors';
import { spacing } from './spacing';
import { layout } from './layout';

export const theme = {
  // ======================
  // BRAND
  // ======================
  brand: {
    primary: colors.blue[600],
    primaryHover: colors.blue[700],
    primaryActive: colors.blue[800],

    secondary: colors.blue[400],
    subtle: colors.blue[100],
  },

  // ======================
  // BACKGROUND
  // ======================
  background: {
    primary: colors.gray[50],
    secondary: colors.gray[100],
    surface: '#FFFFFF',
    surfaceMuted: colors.gray[100],

    success: colors.green[50],
    error: colors.red[50],
    warning: colors.yellow[50],
  },

  // ======================
  // TEXT
  // ======================
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[500],

    label: colors.gray[500],
    muted: colors.gray[400],
    inverse: '#FFFFFF',

    placeholder: colors.gray[400],

    success: colors.green[700],
    error: colors.red[700],
    warning: colors.yellow[700],

    link: colors.blue[500],
    linkHover: colors.blue[700],
  },

  // ======================
  // BORDER
  // ======================
  border: {
    default: colors.gray[200],
    strong: colors.gray[300],
    focus: colors.blue[600],
    inputTextfield: colors.gray[300],

    success: colors.green[500],
    error: colors.red[500],
    warning: colors.yellow[500],
  },

  // ======================
  // STATES (GENERIC UI STATES)
  // ======================
  state: {
    success: {
      background: colors.green[50],
      text: colors.green[700],
      border: colors.green[500],
    },
    error: {
      background: colors.red[50],
      text: colors.red[700],
      border: colors.red[500],
    },
    warning: {
      background: colors.yellow[50],
      text: colors.yellow[700],
      border: colors.yellow[500],
    },
  },

  // ======================
  // FINTECH SPECIAL
  // ======================
  amount: {
    positive: colors.green[600],
    negative: colors.red[500],
  },

  // ======================
  // BUTTON SYSTEM
  // ======================
  buttons: {
    primary: {
      background: colors.blue[600],
      text: '#FFFFFF',
      pressed: colors.blue[800],
      border: undefined,
    },

    secondary: {
      background: colors.gray[50],
      text: colors.gray[900],
      border: undefined,
      pressed: undefined,
    },

    success: {
      background: colors.green[600],
      text: '#FFFFFF',
      pressed: undefined,
      border: undefined,
    },

    disabled: {
      background: colors.gray[200],
      text: colors.gray[400],
      pressed: colors.gray[200], // same as background
      border: undefined
    },
  },

  // ======================
  // SPACING
  // ======================
  spacing,

  // ======================
  // LAYOUT
  // ======================
  layout,

  // ======================
  // RADIUS
  // ======================
  radius: {
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },
};
