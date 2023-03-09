import  CheckboxLabel from ".";


export default {
  title: 'Componets/CheckboxLabel',
  component: CheckboxLabel,
 

};

const Template = args => <CheckboxLabel {...args} />

export const Default = Template.bind({});

Default.args = {
    label:"Label",
    disabled: false,
    checked:true
}

