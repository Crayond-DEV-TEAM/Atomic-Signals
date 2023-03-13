import { SelectedChips } from ".";


export default {
  title: 'Components/Chips',
  component: SelectedChips
};

const Template = args => <SelectedChips {...args} />

export const Default = Template.bind({});

Default.args = {
  label: 'Chips',
  children: 'Chips',
  disabled: false,
}

