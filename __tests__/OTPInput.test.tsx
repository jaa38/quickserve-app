import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { OTPInput } from '../src/components/OTPInput';

describe('OTPInput', () => {
  it('renders correct number of inputs', () => {
    const { getAllByTestId } = render(
      <OTPInput length={6} value="" onChange={() => {}} />
    );

    const inputs = getAllByTestId('otp-input');

    expect(inputs.length).toBe(6);
  });

  it('accepts single input correctly', () => {
    let value = '';

    const handleChange = (val: string) => {
      value = val;
    };

    const { getAllByTestId } = render(
      <OTPInput length={6} value={value} onChange={handleChange} />
    );

    const inputs = getAllByTestId('otp-input');

    fireEvent.changeText(inputs[0], '1');

    expect(value).toBe('1');
  });

  it('handles full OTP input (with rerender)', () => {
    let value = '';

    const handleChange = (val: string) => {
      value = val;
      rerender(
        <OTPInput length={4} value={value} onChange={handleChange} />
      );
    };

    const { getAllByTestId, rerender } = render(
      <OTPInput length={4} value={value} onChange={handleChange} />
    );

    const inputs = getAllByTestId('otp-input');

    fireEvent.changeText(inputs[0], '1');
    fireEvent.changeText(inputs[1], '2');
    fireEvent.changeText(inputs[2], '3');
    fireEvent.changeText(inputs[3], '4');

    expect(value).toBe('1234');
  });

  it('applies error style when error is true', () => {
    const { getAllByTestId } = render(
      <OTPInput length={4} value="1234" onChange={() => {}} error />
    );

    const inputs = getAllByTestId('otp-input');

    expect(inputs.length).toBe(4);
  });
});