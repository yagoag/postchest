import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText('Welcome to PostChest!');
  expect(welcomeMessage).toBeInTheDocument();
});
