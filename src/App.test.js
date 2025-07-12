import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page header', () => {
  render(<App />);
  const heading = screen.getByText(/Mental Health LMS/i);
  expect(heading).toBeInTheDocument();
});
