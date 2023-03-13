import  Checkbox from ".";


export default {
  title: 'Componets/Checkbox',
  component: Checkbox,
 

};

const Template = args => <Checkbox {...args} />

export const Default = Template.bind({});

Default.args = {
    label:"Label",
    disabled: false,
    checked:true
}

