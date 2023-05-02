<template>
    <div class="screen">
        <h1>✨ Congratulations ✨</h1>
        <h3>{{ Math.round(timer / 1000) }} seconds</h3>
        <button @click="this.$emit('onStartAgain')">Start Again</button>
    </div>
</template>

<script>
export default {
    props: {
        timer: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.screen {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: $dark;
    color: $light;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 5rem;
    }

    h3 {
        margin-top: 1.5rem;
        font-size: 1.5rem;
    }

    button {
        font-family: $font;
        background: transparent;
        box-shadow: none;
        border: 1px solid $light;
        color: $light;
        margin: 1rem;
        padding: 1rem 1.25rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        &:hover {
            background-color: $light;
            color: $dark;
        }
    }
}
</style>
