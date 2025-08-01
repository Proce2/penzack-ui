import type { Meta, StoryObj } from '@storybook/react';
import { StatusLabel } from '../src/components/Button/StatusLabel';
import '../src/components/Button/StatusLabel.css';

const meta: Meta<typeof StatusLabel> = {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A status label component for the Penzack UI kit that matches Next.js dashboard styling.
Displays different status states with appropriate colors and styling.

## Usage
\`\`\`tsx
import { StatusLabel } from 'penzack-ui';

<StatusLabel status="active" />
<StatusLabel status="in-progress" />
\`\`\`

Perfect for displaying product status, user status, or any state information in your dashboard.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Status type to display',
      control: 'select',
      options: ['active', 'in-progress'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusLabel>;

export const Active: Story = {
  args: { status: 'active' },
  parameters: {
    docs: {
      description: {
        story: 'Active status with white background and black text - indicates something is currently running or enabled.',
      },
    },
  },
};

export const InProgress: Story = {
  args: { status: 'in-progress' },
  parameters: {
    docs: {
      description: {
        story: 'In Progress status with blue border, white background and black text - indicates work in progress.',
      },
    },
  },
};
