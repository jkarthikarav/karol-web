import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  docs: { autodocs: 'tag' },
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    base: process.env.GITHUB_ACTIONS === 'true' ? '/karol-web/' : '/',
  }),
};

export default config;
