<template>
    <Main v-if="statusMatch === 'default'" @onStart="handleStart" />
    <Interact
        v-if="statusMatch === 'match'"
        :cardsContent="settings.cardsContent"
    />
    <Result />
</template>

<script>
import Interact from "./pages/Interact.vue";
import Main from "./pages/Main.vue";
import Result from "./pages/Result.vue";
import { shuffleArray } from "./utils/helpers";

export default {
    name: "App",
    components: {
        Main,
        Interact,
        Result,
    },

    data() {
        return {
            statusMatch: "default",
            settings: {
                totalOfBlocks: 0,
                cardsContent: [],
                startedAt: null,
            },
        };
    },

    methods: {
        handleStart(config) {
            this.settings.totalOfBlocks = config.mode ** 2;

            const cards = [];
            for (let i = 1; i <= this.settings.totalOfBlocks / 2; i++) {
                cards.push(i);
                cards.push(i);
            }
            this.settings.cardsContent = shuffleArray(
                shuffleArray(shuffleArray(cards))
            );

            // data is ready
            this.statusMatch = "match";
            this.settings.startedAt = new Date().getTime();
        },
    },
};
</script>
