import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MetricCard } from '../src/components/MetricCard/MetricCard';

describe('MetricCard', () => {
  it('renders title and value', () => {
    render(<MetricCard title="Profit" value="$100,000" />);
    expect(screen.getByText('Profit')).toBeInTheDocument();
    expect(screen.getByText('$100,000')).toBeInTheDocument();
  });

  it('formats numeric values', () => {
    render(<MetricCard title="Users" value={123456} />);
    expect(screen.getByText('123,456')).toBeInTheDocument();
  });

  it('displays trend information', () => {
    const trend = { value: 12.5, direction: 'up' as const, period: 'vs last month' };
    render(<MetricCard title="Profit" value="$100" trend={trend} />);
    
    expect(screen.getByText('12.5', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('handles click events when clickable', () => {
    const handleClick = jest.fn();
    render(<MetricCard title="Profit" value="$100" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<MetricCard title="Profit" value="$100" loading />);
    expect(document.querySelector('.pz-metric-card__skeleton')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container } = render(
      <MetricCard title="Profit" value="$100" variant="success" />
    );
    expect(container.firstChild).toHaveClass('pz-metric-card--success');
  });

  it('shows loading state', () => {
    const { container } = render(<MetricCard title="Profit" value="$100" loading />);
    expect(container.firstChild).toHaveClass('pz-metric-card--loading');
  });
});
