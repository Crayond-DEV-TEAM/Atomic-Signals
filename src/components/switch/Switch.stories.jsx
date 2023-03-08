import IosSwitch from "./index";


export default {
    title: 'Switch',
    component: IosSwitch
};

const Template = args => <IosSwitch {...args} />

export const Switch = Template.bind({});

Switch.args = {
    disabled: false
}