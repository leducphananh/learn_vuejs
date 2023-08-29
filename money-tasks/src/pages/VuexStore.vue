<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        store.dispatch('transactions/fetchTransactions');

        const transactions = computed(
            () => store.state.transactions.transactions
        );

        return { transactions };
    },
};
</script>

<template>
    <h1>Vuex store</h1>
    <div v-if="transactions.length > 0">
        <div
            class="item"
            v-for="transaction in transactions"
            :key="transaction.id"
        >
            <router-link
                :to="{
                    name: 'transaction-details-route',
                    params: { id: transaction.id },
                }"
                >{{ transaction.name }}</router-link
            >
            <div class="price">Price: {{ transaction.price }}</div>
        </div>
    </div>
    <div v-else>Loading transactions...</div>
</template>
