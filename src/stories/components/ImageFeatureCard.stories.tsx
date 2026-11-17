import type { Meta, StoryObj } from '@storybook/react-vite';
import { KarolImageFeatureCard } from '../../components/KarolComponents';

const meta = {
  title: 'Components/Image Feature Card',
  component: KarolImageFeatureCard,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85',
    title: 'Image feature card',
    description: 'A reusable image-led feature surface with content anchored at the bottom.',
    fullWidth: false,
  },
} satisfies Meta<typeof KarolImageFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 720, padding: 24, background: 'var(--karol-brand-primary)' }}>
      <KarolImageFeatureCard {...args} />
    </div>
  ),
};
