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

const Template: StoryFn<CounterProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Counter {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  quantity: '',
  variant: 'primary',
  size: 8,
  stroke: true,
  pulse: false,
};

export const SmallCounter = Template.bind({});
SmallCounter.args = {
  quantity: '5',
  variant: 'primary',
  size: 8,
  stroke: true,
  pulse: false,
};

export const MediumCounter = Template.bind({});
MediumCounter.args = {
  quantity: '10',
  variant: 'primary',
  size: 16,
  stroke: true,
  pulse: false,
};

export const LargeCounter = Template.bind({});
LargeCounter.args = {
  quantity: '100',
  variant: 'primary',
  size: 24,
  stroke: true,
  pulse: false,
};

export const PulsingCounter = Template.bind({});
PulsingCounter.args = {
  quantity: '10',
  variant: 'primary',
  size: 12,
  stroke: true,
  pulse: true,
};
