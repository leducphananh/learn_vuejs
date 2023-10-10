import { firestoreAuth } from '@/configs/firebase';
import { createRouter, createWebHistory } from 'vue-router';

const requireAuth = (to, from, next) => {
    const user = firestoreAuth.currentUser;
    if (!user) next({ name: 'Login' });

    next();
};

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            leading: true,
            showFooter: true,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/pages/'),
        beforeEnter: requireAuth,
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "register" */ '@/pages/register'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "login" */ '@/pages/login'),
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () =>
            import(/* webpackChunkName: "logout" */ '@/pages/logout'),
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            pageName: 'Profile',
            leading: false,
            showFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "profile" */ '@/pages/profile'),
        beforeEnter: requireAuth,
    },
    {
        path: '/report',
        name: 'Report',
        meta: {
            pageName: 'Report',
            leading: false,
            showFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "report" */ '@/pages/report'),
        beforeEnter: requireAuth,
    },
    {
        path: '/budget',
        name: 'Budget',
        meta: {
            pageName: 'Budget',
            leading: false,
            showFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "budget" */ '@/pages/budget'),
        beforeEnter: requireAuth,
    },
    {
        path: '/new-transaction',
        name: 'NewTransaction',
        meta: {
            pageName: 'New Transaction',
            leading: false,
            showFooter: true,
        },
        component: () =>
            import(
                /* webpackChunkName: "transaction" */ '@/pages/new-transaction'
            ),
        beforeEnter: requireAuth,
    },
    { path: '/home', redirect: '/' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
