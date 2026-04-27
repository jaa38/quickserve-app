import React from 'react'
import { render } from '@testing-library/react-native'
import { Text } from 'react-native'

describe('App', () => {
  it('renders basic text correctly', () => {
    const { getByText } = render(<Text>Hello QuickServe</Text>)

    expect(getByText('Hello QuickServe')).toBeTruthy()
  })
})