import { NotificationCard } from '.';
// import { NotificationCard } from '.';
// import { NotificationCard } from '../index';

export default {
    title: 'components/NotificationCard',
    component: NotificationCard,
};

const Template = args => <NotificationCard { ...args }/>;

export const NotifyCard = Template.bind({});
NotifyCard.argTypes = {
    prescription: {
        description: 'Notification card body content',
    },
    notificationTime: {
        description: 'Notification recived time to current time duration',
    },
};
NotifyCard.args = {
    prescription: 'New feedback from Srikrishna (Chief of Engineering)',
    notificationTime: '16 Feb 2023, 09:45 AM',
};