import { Meta, StoryFn } from '@storybook/react';
import { Counter, CounterProps } from './Counter';

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: [8, 12, 16, 20, 24],
    },
    stroke: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
    quantity: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
  },
} as Meta;

const Template: StoryFn<CounterProps> = (args: any) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
  quantity: '',
  variant: 'primary',
  size: 8,
  stroke: true,
  pulse: false,
};
