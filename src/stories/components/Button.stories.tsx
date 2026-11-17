import type { Meta, StoryObj } from '@storybook/react-vite';
import { KarolButton } from '../../components/KarolComponents';

const meta = {
  title: 'Components/Button',
  component: KarolButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled-j', 'filled-a', 'filled-k', 'tonal-j', 'tonal-a', 'tonal-k', 'elevated', 'outlined', 'text'],
    },
    size: { control: 'radio', options: ['large', 'medium'] },
    fitContent: { control: 'boolean' },
  },
  args: { children: 'Button', variant: 'filled-j', size: 'large', fitContent: false },
} satisfies Meta<typeof KarolButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      {(['filled-j', 'filled-a', 'filled-k', 'tonal-j', 'tonal-a', 'tonal-k', 'elevated', 'outlined', 'text'] as const).map((variant) => (
        <KarolButton key={variant} variant={variant} fitContent>{variant}</KarolButton>
      ))}
    </div>
  ),
};
