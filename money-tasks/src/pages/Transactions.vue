<template>
    <div>Transactions page</div>
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

<script>
import useTransactions from '@/hooks/useTransactions';

export default {
    setup() {
        const { transactions } = useTransactions();

        return { transactions };
    },
};
</script>
