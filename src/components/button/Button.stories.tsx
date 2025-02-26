import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: [28, 36, 56],
    },
    state: {
      control: 'select',
      options: ['enabled', 'loading', 'disabled'],
    },
    counter: {
      control: 'boolean',
    },
    focused: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  size: 36,
  state: 'enabled',
  focused: false,
  label: 'Cute button',
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  variant: 'primary',
  size: 36,
  state: 'loading',
  focused: false,
  label: 'Loading...',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  variant: 'primary',
  size: 36,
  state: 'disabled',
  focused: false,
  label: 'Disabled button',
};
