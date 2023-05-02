<template>
    <div
        class="card"
        @click="handleToggleFlipCard"
        :class="{ disabled: isDisabled || isChecked }"
        :style="{
            height: `${(920 - 16 * 4) / Math.sqrt(cardsContent.length) - 16}px`,
            width: `${
                (((920 - 16 * 4) / Math.sqrt(cardsContent.length) - 16) * 3) / 4
            }px`,
            perspective: `${
                ((((920 - 16 * 4) / Math.sqrt(cardsContent.length) - 16) * 3) /
                    4) *
                2
            }px`,
        }"
    >
        <div class="card__inner" :class="{ flipped: isFlipped }">
            <!-- Front -->
            <div class="card__face card__face--front">
                <div
                    class="card__content"
                    :style="{
                        backgroundSize: `${
                            (((920 - 16 * 4) / Math.sqrt(cardsContent.length) -
                                16) *
                                3) /
                            4 /
                            3
                        }px ${
                            (((920 - 16 * 4) / Math.sqrt(cardsContent.length) -
                                16) *
                                3) /
                            4 /
                            3
                        }px`,
                    }"
                ></div>
            </div>

            <!-- Back -->
            <div class="card__face card__face--back">
                <div
                    class="card__content"
                    :style="{
                        backgroundImage: `url(${require('@/assets/images/' +
                            card.value +
                            '.png')})`,
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
        cardsContent: {
            type: Array,
            default: () => [],
        },
        currentCardsFlipped: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            isChecked: false,
            isDisabled: false,
            isFlipped: false,
        };
    },

    methods: {
        handleToggleFlipCard() {
            if (this.currentCardsFlipped.length >= 2) return;
            if (this.isDisabled || this.isChecked) return;

            this.isFlipped = !this.isFlipped;
            if (this.isFlipped) this.$emit("onFlip", this.card);
        },
        handleFlipBack() {
            this.isFlipped = false;
        },
        disabledCard() {
            this.isDisabled = true;
        },
        enabledCard() {
            this.isDisabled = false;
        },
        checkedCard() {
            this.isChecked = true;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.card {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1rem;
    width: 90px;
    height: 120px;

    &__inner {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        &.flipped {
            transform: rotateY(-180deg);
        }
    }

    &__face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);

        &--front {
            .card__content {
                background: url("../assets/images/icon_back.png") no-repeat
                    center center;
                height: 100%;
                width: 100%;
            }
        }

        &--back {
            background-color: $light;
            transform: rotateY(-180deg);
            .card__content {
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
            }
        }
    }

    &.disabled {
        .card__inner {
            cursor: default;
        }
    }
}
</style>
