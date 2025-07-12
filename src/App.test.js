import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /mental health nursing modules/i,
  });
  expect(heading).toBeInTheDocument();
});
