<template>
    <nav class="nav">
        <router-link :to="{ name: 'overview-route' }">Overview</router-link>
        <router-link :to="{ name: 'transaction-route' }"
            >Transactions</router-link
        >
        <router-link :to="{ name: 'vuex-store' }">Vuex Store</router-link>
        <router-link to="/">Budgets</router-link>
        <router-link to="/">Reports</router-link>
        <router-link to="/">Settings</router-link>
    </nav>
</template>

<style scoped>
.nav {
    display: flex;
    gap: 8px;
}
</style>
