import SnackBar from ".";

export default {
    title: 'SnackBar',
    component: SnackBar
};

const Template = args => <SnackBar {...args} />

export const SnackBarMessage = Template.bind({});

SnackBarMessage.args = {
    message: 'Message appears here',
    autoHideDuration: '',
    isOpen: false
}