import Button from ".";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  variant: "contained",
  children: "Button",
  disabled: false,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  children: "Button",
  disabled: false,
};
