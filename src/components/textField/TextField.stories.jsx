import InputField from ".";

export default {
  title: "TextField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const InputText = Template.bind({});

InputText.args = {
  variant: "outlined",
  placeholder: "placeholder text",
  disabled: false,
};
