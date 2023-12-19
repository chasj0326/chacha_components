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
        padding: '3px 6px',
        borderRadius: '10px',
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
        padding: '3px 6px',
        borderRadius: '10px',
      }}>
      primary long name
    </button>
  ),
};
