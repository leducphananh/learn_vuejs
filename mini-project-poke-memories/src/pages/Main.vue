<template>
    <div class="screen">
        <h1>POKE MEMORIES</h1>
        <h3>Select mode to start game</h3>
        <div class="actions">
            <button @click="handleModeClick(2)">
                <span>2x2</span>
                <span>Easy</span>
            </button>
            <button @click="handleModeClick(4)">
                <span>4x4</span>
                <span>Normal</span>
            </button>
            <button @click="handleModeClick(6)">
                <span>6x6</span>
                <span>Hard</span>
            </button>
            <button @click="handleModeClick(8)">
                <span>8x8</span>
                <span>Super Hard</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleModeClick(mode) {
            this.$emit("onStart", { mode });
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $dark;
    color: $light;

    h1 {
        font-size: 4.5rem;
        text-transform: uppercase;
    }

    p {
        font-size: 2rem;
    }
}
.actions {
    display: flex;
    margin-top: 2rem;
    button {
        font-family: $font;
        width: 150px;
        height: 150px;
        background: transparent;
        box-shadow: none;
        border: 1px solid $light;
        color: $light;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        margin: 0 1rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        &:hover {
            background-color: $light;
            color: $dark;
        }
        span:first-child {
            font-size: 2rem;
        }
        span:last-child {
            display: block;
            font-size: 1.25rem;
            margin-top: 0.5rem;
        }
    }
}
</style>
