import type { Meta, StoryObj } from '@storybook/react';
import { StatusLabel } from './StatusLabel';
import './StatusLabel.css';

const meta: Meta<typeof StatusLabel> = {
  title: 'Components/StatusLabel',
  component: StatusLabel,
};
export default meta;

type Story = StoryObj<typeof StatusLabel>;

export const Active: Story = {
  args: { status: 'active' },
};
export const InProgress: Story = {
  args: { status: 'in-progress' },
};
export const Inactive: Story = {
  args: { status: 'inactive' },
};
