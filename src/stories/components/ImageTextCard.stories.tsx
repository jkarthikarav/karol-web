import type { Meta, StoryObj } from '@storybook/react-vite';
import { KarolImageTextCard } from '../../components/KarolComponents';

const meta = {
  title: 'Components/Image Text Card',
  component: KarolImageTextCard,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  args: {
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Modern architecture',
    eyebrow: 'Component',
    title: 'Image text card',
    description: 'A reusable card pairing a large image with supporting content and an action.',
    actionLabel: 'Learn more',
  },
} satisfies Meta<typeof KarolImageTextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 24, background: 'var(--karol-brand-primary)' }}>
      <KarolImageTextCard {...args} />
    </div>
  ),
};
