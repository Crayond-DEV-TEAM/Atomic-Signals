import SearchField from ".";

export default {
  title: "Search",
  component: SearchField,
};

const Template = (args) => <SearchField {...args} />;

export const SearchBox = Template.bind({});

SearchBox.args = {
  variant: "outlined",
  placeholder: "Search by",
  value: "",
  onChange: undefined,
  onClear: undefined,
  disabled: false,
  fullWidth: false,
};
