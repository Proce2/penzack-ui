import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusLabel } from '../src/components/Button/StatusLabel';

describe('StatusLabel', () => {
  it('renders the status with the first letter capitalized', () => {
    render(<StatusLabel status="active" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders "In Progress" for the "in-progress" status', () => {
    render(<StatusLabel status="in-progress" />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('applies the correct CSS class for the status', () => {
    render(<StatusLabel status="active" />);
    const label = screen.getByText('Active');
    expect(label).toHaveClass('pz-status-label--active');
  });

  it('applies the correct CSS class for "in-progress" status', () => {
    render(<StatusLabel status="in-progress" />);
    const label = screen.getByText('In Progress');
    expect(label).toHaveClass('pz-status-label--in-progress');
  });

  it('renders an inactive status', () => {
    render(<StatusLabel status="inactive" />);
    expect(screen.getByText('Inactive')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toHaveClass('pz-status-label--inactive');
  });
});
