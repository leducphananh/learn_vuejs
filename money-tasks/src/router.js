import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TransactionDetail from './pages/TransactionDetail';
import Transactions from './pages/Transactions';
import VuexStore from './pages/VuexStore';

const routes = [
    { path: '/', name: 'overview-route', component: Home },
    {
        path: '/transactions',
        name: 'transaction-route',
        component: Transactions,
    },
    {
        path: '/transactions/:id',
        name: 'transaction-details-route',
        component: TransactionDetail,
    },
    {
        path: '/vuex-store',
        name: 'vuex-store',
        component: VuexStore,
    },
    { path: '/ts', redirect: '/transactions' },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
