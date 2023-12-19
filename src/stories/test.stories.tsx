import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'button',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <button
      style={{
        border: 'none',
        backgroundColor: 'royalblue',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '5px',
      }}>
      primary
    </button>
  ),
};

export const PrimaryLongName: Story = {
  render: () => (
    <button
      style={{
        border: 'none',
        backgroundColor: 'royalblue',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '5px',
      }}>
      primary long name
    </button>
  ),
};
