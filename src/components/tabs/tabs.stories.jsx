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
    tabs:tabLable = [
        { id: 1,label: "From me (2)"},
        {id: 2,label: "To me (5)"},
        {id: 3,label: "Other feedbacks"},
      ],
};


