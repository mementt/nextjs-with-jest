import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Page Test', () => {
  it('renders a HomePage', () => {
    render(<Home />);

    expect(screen.getByText('Toggle Link')).toBeInTheDocument();
    expect(screen.getByText('Go To About Page')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Go To About Page')).not.toBeInTheDocument();
  });
});
