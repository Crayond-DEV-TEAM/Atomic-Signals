import * as React from 'react';
import { TabsChange } from './index';

export default {
    title: 'components/TabsChange',
    component: TabsChange,
};

function Template(args) {
    return React.createElement(TabsChange, { ...args });
}

export const Default = Template.bind({});
Default.args = {
    children: 'TabsChange',
    size: 'small',
};


