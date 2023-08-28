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
import { ref } from 'vue';

export default {
    setup() {
        const transactions = ref([]);

        const fetchTransactions = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3000/transactions'
                );
                if (response.ok) {
                    return (transactions.value = await response.json());
                }
                throw new Error('Something went wrong');
            } catch (err) {
                console.error(err);
            }
        };

        fetchTransactions();

        return { transactions };
    },
};
</script>
