import Button from ".";


export default {
  title: 'Button',
  component: Button
};

const Template = args => <Button {...args} />

export const Contained = Template.bind({});

Contained.args = {
  label: 'button',
  variant: 'contained',
  children: 'Button',
  disabled: false
}

export const Outlined = Template.bind({});

Outlined.args = {
  label: 'button',
  variant: 'outlined',
  children: 'Button',
  disabled: false
}