import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The main Button component for the Penzack UI kit. 
Supports multiple variants, sizes, loading states, and full-width styling.

## Usage
\`\`\`tsx
import { Button } from 'penzack-ui';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Export</Button>
<Button loading>Loading...</Button>
\`\`\`

Perfect for dashboard export buttons, form submissions, and user actions.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Button style variant',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      description: 'Button size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      description: 'Make button full width',
      control: 'boolean',
    },
    loading: {
      description: 'Show loading state with spinner',
      control: 'boolean',
    },
    children: {
      description: 'Button content (text, icons, etc.)',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button style - used for main actions like form submissions.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Export',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button with blue border and black text - perfect for dashboard export functionality.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner animation.',
      },
    },
  },
};
