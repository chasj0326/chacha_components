import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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
