<template>
    <div class="card" @click="handleToggleFlipCard">
        <div class="card__inner" :class="{ flipped: isFlipped }">
            <!-- Front -->
            <div class="card__face card__face--front">
                <div class="card__content"></div>
            </div>

            <!-- Back -->
            <div class="card__face card__face--back">
                <div
                    class="card__content"
                    :style="{
                        backgroundImage: `url(${require('@/assets/' +
                            backfaceUrl)})`,
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backfaceUrl: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            isFlipped: false,
        };
    },

    methods: {
        handleToggleFlipCard() {
            this.isFlipped = !this.isFlipped;
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
                background-size: 40px 40px;
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
}
</style>
