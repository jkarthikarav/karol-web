import type { Meta, StoryObj } from '@storybook/react-vite';
import { KarolTextCard } from '../../components/KarolComponents';

const meta = {
  title: 'Components/Text Card',
  component: KarolTextCard,
  tags: ['autodocs'],
  argTypes: { align: { control: 'radio', options: ['top', 'bottom'] } },
  args: { align: 'bottom' },
} satisfies Meta<typeof KarolTextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 520, padding: 24, background: 'var(--karol-brand-primary)' }}>
      <KarolTextCard {...args}>
        <p className="karol-type-label">Component</p>
        <h2 className="karol-type-heading">Text card</h2>
        <p className="karol-type-body">A reusable text surface for a title, supporting content, and optional actions.</p>
      </KarolTextCard>
    </div>
  ),
};
