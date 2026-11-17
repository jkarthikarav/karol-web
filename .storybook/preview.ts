import type { Preview } from '@storybook/react-vite';
import '../src/styles/karol.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: { storySort: { order: ['Docs', 'Foundations', 'Components'] } },
  },
};
export default preview;
