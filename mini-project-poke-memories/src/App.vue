<template>
    <Main v-if="statusMatch === 'default'" @onStart="handleStart" />
    <Interact
        v-if="statusMatch === 'match'"
        :cardsContent="settings.cardsContent"
        @onFinish="onGetResult"
    />
    <Result
        v-if="statusMatch === 'result'"
        :timer="timer"
        @onStartAgain="this.statusMatch = 'default'"
    />
    <CopyRight />
</template>

<script>
import CopyRight from "./components/CopyRight.vue";
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
        CopyRight,
    },

    data() {
        return {
            statusMatch: "default",
            settings: {
                totalOfBlocks: 0,
                cardsContent: [],
                startedAt: null,
            },
            timer: 0,
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
        onGetResult() {
            this.timer = new Date().getTime() - this.settings.startedAt;
            this.statusMatch = "result";
        },
    },
};
</script>
