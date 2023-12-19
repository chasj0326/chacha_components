import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'button',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => <button>primary</button>,
};

export const PrimaryLongName: Story = {
  render: () => <button>primary long name</button>,
};
