import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/'),
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "about" */ '@/pages/register'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "about" */ '@/pages/login'),
    },
    { path: '/home', redirect: '/' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
