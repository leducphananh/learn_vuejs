<template>
    <div>Transaction detail</div>
    <div v-if="transaction">
        <h1>ID: {{ transaction.id }}</h1>
        <h2>Name: {{ transaction.name }}</h2>
        <h3>Price: {{ transaction.price }}</h3>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }}...</div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const transactionId = route.params.id;
        const transaction = ref(null);

        const fetchTransaction = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/transactions/${transactionId}`
                );
                if (response.ok) {
                    transaction.value = await response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchTransaction();

        return { transaction };
    },
};
</script>
