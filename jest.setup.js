import 'react-native-gesture-handler/jestSetup';

// ✅ Safe mock for animations (modern RN)
jest.mock('react-native/Libraries/Animated/Animated', () => {
  const ActualAnimated = jest.requireActual(
    'react-native/Libraries/Animated/Animated'
  );
  return {
    ...ActualAnimated,
    timing: () => ({
      start: jest.fn(),
    }),
    spring: () => ({
      start: jest.fn(),
    }),
    loop: () => ({
      start: jest.fn(),
    }),
  };
});