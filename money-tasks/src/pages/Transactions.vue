<template>
    <div>Transactions page</div>
    <div v-if="transactions.length">
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
export default {
    data() {
        return {
            transactions: [],
        };
    },

    created() {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/transactions");
            const jsonData = await response.json();
            this.transactions = jsonData;
        };

        fetchData();
    },
};
</script>
