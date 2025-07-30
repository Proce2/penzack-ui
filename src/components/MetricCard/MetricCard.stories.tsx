import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Trading/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger'],
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Dollar icon SVG
const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
  </svg>
);

// Trending Up icon SVG  
const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
  </svg>
);

// Users icon SVG
const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.04 3.04 0 0 0 16.95 6c-.74 0-1.41.41-1.75 1.03L13.98 10H10l-2.05-5.05C7.6 4.41 6.93 4 6.19 4 5.32 4 4.6 4.68 4.51 5.52L4 11v11h2v-6h4v6h2v-6h4v6h4z"/>
  </svg>
);

export const Profit: Story = {
  args: {
    title: 'Profit',
    value: '$232,928,423.34',
    icon: <DollarIcon />,
    variant: 'success',
    trend: {
      value: 12.5,
      direction: 'up',
      period: 'vs last month',
    },
  },
};

export const Deposits: Story = {
  args: {
    title: 'Total of Deposits',
    value: '$241,938,321.24',
    icon: <TrendingUpIcon />,
    variant: 'default',
    trend: {
      value: 8.3,
      direction: 'up',
      period: 'vs last month',
    },
  },
};

export const Withdrawals: Story = {
  args: {
    title: 'Pending Withdrawals',
    value: '$23,424,135',
    icon: <DollarIcon />,
    variant: 'warning',
    trend: {
      value: 3.2,
      direction: 'down',
      period: 'vs last week',
    },
  },
};

export const Clients: Story = {
  args: {
    title: 'Registered Clients',
    value: 352453,
    icon: <UsersIcon />,
    variant: 'default',
    trend: {
      value: 15.8,
      direction: 'up',
      period: 'vs last month',
    },
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Metric',
    value: '0',
    icon: <DollarIcon />,
    loading: true,
  },
};

export const Clickable: Story = {
  args: {
    title: 'Client\'s Balance',
    value: '$928,423.34',
    icon: <DollarIcon />,
    onClick: () => alert('Metric card clicked!'),
  },
};
