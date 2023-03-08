import * as React from 'react';
import { SignalInput } from './index';

export default {
    title: 'components/SignalInput',
    component: SignalInput,
};

function Template(args) {
    return React.createElement(SignalInput, { ...args });
}

export const Default = Template.bind({});
Default.args = {
    children: 'SignalInput',
    size: 'small',

};
Default.args = {
    size: 'small',
    label: 'SignalInput',
};
Default.args = {
    label: 'SignalInput',
    size: 'small',
};

Default.args = {
    size: 'large',
    label: 'SignalInput',
};

