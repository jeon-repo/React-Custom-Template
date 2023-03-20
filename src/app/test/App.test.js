import { render, screen } from '@testing-library/react';
import { test, expect } from 'jest';
import App from 'app/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
