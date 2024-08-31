import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../infrastructure/components/App';

test('renders learn react link', () => {
  render(<App msg="" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
