export const PUBLIC_LAYOUT = 'default';

export const PROFILE_OPTIONS = [
    {
        name: 'My Wallet',
        icon: 'fa-solid fa-wallet',
        route: { name: 'Home' },
    },
    {
        name: 'Tools',
        icon: 'fa-solid fa-toolbox',
        route: { name: 'Home' },
    },
    {
        name: 'Privacy',
        icon: 'fa-solid fa-shield-halved',
        route: { name: 'Home' },
    },
    {
        name: 'About',
        icon: 'fa-solid fa-circle-info',
        route: { name: 'Home' },
    },
    {
        name: 'Logout',
        icon: 'fa-solid fa-right-from-bracket',
        route: { name: 'Logout' },
    },
];

export const NAVBAR_BOTTOM = [
    {
        icon: 'fa-solid fa-house',
        route: { name: 'Home' },
    },
    {
        icon: 'fa-solid fa-chart-simple',
        route: { name: 'Report' },
    },
    {
        icon: 'fa-solid fa-chart-pie',
        route: { name: 'Budget' },
    },
    {
        icon: 'fa-solid fa-user',
        route: { name: 'Profile' },
    },
];

export const COLLECTIONS = {
    transactions: 'transactions',
};

export const ACCEPTED_UPLOAD_FILE_TYPE = [
    'image/png',
    'image/jpg',
    'image/gif',
];
