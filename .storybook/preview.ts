import type { Preview } from '@storybook/react';
import '../src/components/Button/Button.css';
import '../src/components/Input/Input.css';
import '../src/components/MetricCard/MetricCard.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#111827',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
