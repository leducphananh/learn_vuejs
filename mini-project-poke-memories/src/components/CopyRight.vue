<template>
    <p>
        This game owned by Napole Duc Phan Anh -
        <a href="https://github.com/leducphananh" target="_blank"
            >view github here</a
        >
    </p>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
p {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.5rem;
    color: $light;
    z-index: 3;
    font-size: 1.5rem;
    a {
        color: #f4dc26;
    }
}
</style>
