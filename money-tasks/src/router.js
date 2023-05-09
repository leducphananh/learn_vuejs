import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TransactionDetail from "./pages/TransactionDetail";
import Transactions from "./pages/Transactions";

const routes = [
    { path: "/", name: "overview-route", component: Home },
    {
        path: "/transactions",
        name: "transaction-route",
        component: Transactions,
    },
    {
        path: "/transactions/:id",
        name: "transaction-details-route",
        component: TransactionDetail,
    },
    { path: "/ts", redirect: "/transactions" },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
