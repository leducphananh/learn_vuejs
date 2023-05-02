<template>
    <h1>Interact Component Here</h1>
    <Card
        v-for="(card, index) in cardsContent"
        :key="index"
        :backfaceUrl="`images/${card}.png`"
    />
</template>

<script>
import Card from "../components/Card.vue";
export default {
    props: {
        cardsContent: {
            type: Array,
            default: () => [],
        },
    },

    components: {
        Card,
    },
};
</script>
