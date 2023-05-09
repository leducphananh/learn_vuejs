<template>
    <div>Transactions page</div>
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
        <router-link
            :to="{
                name: 'transaction-details-route',
                params: { id: transaction.id },
            }"
            >{{ transaction.name }}</router-link
        >
        <div class="price">Price: {{ transaction.price }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transactions: [
                {
                    id: 1,
                    name: "Tiền ăn",
                    price: 300000,
                },
                {
                    id: 2,
                    name: "Tiền đổ xăng",
                    price: 100000,
                },
                {
                    id: 3,
                    name: "Tiền đi siêu thị",
                    price: 1000000,
                },
            ],
        };
    },
};
</script>
