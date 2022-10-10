/* eslint-disable jsx-a11y/alt-text */
// assets
import {
    DashboardOutlined,
    UserSwitchOutlined,
    DeploymentUnitOutlined,
    InsertRowLeftOutlined,
    CodeOutlined,
    LinkOutlined,
    ContainerOutlined,
    DollarOutlined
} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UserSwitchOutlined,
    DeploymentUnitOutlined,
    InsertRowLeftOutlined,
    CodeOutlined,
    LinkOutlined,
    ContainerOutlined,
    DollarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const dashboardIcon = require('../assets/images/icons/dashboard.png');
const campIcon = require('../assets/images/icons/canping.png');
const contactIcon = require('../assets/images/icons/contact_manage.png');
const groupIcon = require('../assets/images/icons/Group.png');
const survayIcon = require('../assets/images/icons/survay.png');
const linkIcon = require('../assets/images/icons/link.png');
const subscriptionIcon = require('../assets/images/icons/subcription.png');
const codeIcon = require('../assets/images/icons/code.png');

const CustomIcon = (iconName) => {
    return <img src={iconName} style={{ height: 18 }} />;
};

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: () => CustomIcon(dashboardIcon),
            breadcrumbs: false
        },
        {
            id: 'contact-management',
            title: 'Contact Management',
            type: 'item',
            url: '',
            icon: () => CustomIcon(contactIcon),
            breadcrumbs: false
        },
        {
            id: 'campaign-canagement',
            title: 'Campaign Management',
            type: 'item',
            url: '',
            icon: () => CustomIcon(campIcon),
            breadcrumbs: false
        },
        {
            id: 'template',
            title: 'Tamplate',
            type: 'item',
            url: '/template',
            icon: () => CustomIcon(groupIcon),
            breadcrumbs: false
        },
        {
            id: 'surveys',
            title: 'Surveys',
            type: 'item',
            url: '',
            icon: () => CustomIcon(survayIcon),
            breadcrumbs: false
        },
        {
            id: 'registration-links',
            title: 'Registration Links',
            type: 'item',
            url: '',
            icon: () => CustomIcon(linkIcon),
            breadcrumbs: false
        },
        {
            id: 'code-config',
            title: 'Code Config',
            type: 'item',
            url: '',
            icon: () => CustomIcon(codeIcon),
            breadcrumbs: false
        },
        {
            id: 'payment-and-subscription',
            title: 'Payment and Subscription',
            type: 'item',
            url: '',
            icon: () => CustomIcon(subscriptionIcon),
            breadcrumbs: false
        }
    ]
};

export default dashboard;
