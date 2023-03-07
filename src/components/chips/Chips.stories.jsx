import  Chips from ".";


export default {
  title: 'Components/Chips',
  component: Chips
};

const Template = args => <Chips {...args} />

export const Default = Template.bind({});

Default.args = {
  label: 'Chips',
  variant: 'outlined',
  children: 'Chip',
  disabled: false,
}

