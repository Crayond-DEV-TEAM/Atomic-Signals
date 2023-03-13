import * as React from 'react';
import { FeedbackCards } from './index';

export default {
    title: 'FeedbackCards',
    component: FeedbackCards,
};

function Template(args) {
    return React.createElement( FeedbackCards , { ...args });
}

export const SubmitResponse = Template.bind({});
SubmitResponse.args = {
    children: 'FeedbackCards',
    view:false,
    showCollapsed:false
};

export const SubmitResponse_Collapsed = Template.bind({});
SubmitResponse_Collapsed.args = {
    children: 'FeedbackCards',
    view:false,
    showCollapsed:true
};

export const SubmitResponse_Expended = Template.bind({});
SubmitResponse_Expended.args = {
    children: 'FeedbackCards',
    view:true,
    showCollapsed:false
};
