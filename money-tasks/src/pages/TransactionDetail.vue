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
export default {
    data() {
        return {
            transaction: null,
        };
    },

    created() {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:3000/transactions/${this.$route.params.id}`
            );
            const jsonData = await response.json();
            this.transaction = jsonData;
        };

        fetchData();
    },
};
</script>
