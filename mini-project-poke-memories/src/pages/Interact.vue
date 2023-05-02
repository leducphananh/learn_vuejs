<template>
    <div class="screen">
        <div
            class="screen__inner"
            :style="{
                width: `${
                    ((((920 - 16 * 4) / Math.sqrt(cardsContent.length) - 16) *
                        3) /
                        4 +
                        16) *
                    Math.sqrt(cardsContent.length)
                }px`,
            }"
        >
            <Card
                v-for="(card, index) in cardsContent"
                :key="index"
                ref="cards"
                :card="{ index, value: card }"
                :cardsContent="cardsContent"
                :currentCardsFlipped="currentCardsFlipped"
                @onFlip="onFlip"
            />
        </div>
    </div>
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

    data() {
        return {
            currentCardsFlipped: [],
        };
    },

    methods: {
        onFlip(card) {
            if (this.currentCardsFlipped.length === 2) return;

            this.currentCardsFlipped.push(card);
            // if a card has been flipped, it cannot be turned over manually
            this.currentCardsFlipped.forEach((card) => {
                this.$refs.cards[card.index].disabledCard();
            });

            if (this.currentCardsFlipped.length === 2) {
                // disable all cards when 2 cards have been turned over
                this.cardsContent.forEach((card) => {
                    this.$refs.cards[card].disabledCard();
                });
                // enable all cards after a period of time
                setTimeout(() => {
                    this.cardsContent.forEach((card) => {
                        this.$refs.cards[card].enabledCard();
                    });
                }, 800);

                if (
                    this.currentCardsFlipped[0].value ===
                    this.currentCardsFlipped[1].value
                ) {
                    // change the state of card to 'checked'
                    this.$refs.cards[
                        this.currentCardsFlipped[0].index
                    ].checkedCard();
                    this.$refs.cards[
                        this.currentCardsFlipped[1].index
                    ].checkedCard();

                    // reset currentCardsFlipped
                    this.currentCardsFlipped = [];

                    // check if every cards are checked
                    const isCheckedAll = this.$refs.cards.every(
                        (card) => card.isChecked
                    );
                    if (isCheckedAll) {
                        setTimeout(() => {
                            this.$emit("onFinish");
                        }, 800);
                    }
                } else {
                    setTimeout(() => {
                        // close cards
                        this.currentCardsFlipped.forEach((card) => {
                            this.$refs.cards[card.index].handleFlipBack();
                            this.$refs.cards[card.index].enabledCard();
                        });

                        // reset currentCardsFlipped
                        this.currentCardsFlipped = [];
                    }, 800);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.screen {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: $dark;
    color: $light;

    &__inner {
        display: flex;
        flex-wrap: wrap;
        margin: 2rem auto;
    }
}
</style>
