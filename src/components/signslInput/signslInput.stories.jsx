import * as React from "react";
import { SignalInput } from "./index";

export default {
  title: "components/SignalInput",
  component: SignalInput,
};

const Template = (args) => <SignalInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "",
  placeholder: "",
  grade: 0,
  value: "",
  onChange: () => {},
  onClear: () => {},
  error: "",
  fullWidth: false,
};
