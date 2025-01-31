import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: StoryFn<ButtonProps> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
