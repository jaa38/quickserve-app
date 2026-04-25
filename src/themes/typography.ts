// src/theme/typography.ts

export const fontFamily = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
}

export const typography = {
  // ======================
  // HEADINGS
  // ======================
  'heading-xl': {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  'heading-lg': {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  'heading-md': {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
  },
  'heading-sm': {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },

  // ======================
  // BODY
  // ======================
  'body-lg': {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  'body-lg-bold': {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },

  'body-md': {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  'body-md-bold': {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  'body-sm': {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  'body-sm-bold': {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },

  // ======================
  // BUTTONS & LABELS
  // ======================
  'button-lg': {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  'button-md': {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  'button-sm': {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  'label': {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.3,
  },
  'caption': {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.4,
  },
  helper: {
    fontFamily: fontFamily.light,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  helperBold: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },

  //
  // ======================
  // AMOUNTS (FINTECH CORE)
  // ======================
  'amount-lg': {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.3,
  },
  'amount-md': {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.2,
  },

  // ======================
  // LINKS
  // ======================
  'link-lg': {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  'link-md': {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  'link-sm': {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
}