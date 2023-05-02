const { createApp } = Vue;

createApp({
    data() {
        return {
            x: 0,
            y: 0,
        };
    },

    methods: {
        handleMouseOver(event) {
            console.log(event);
        },
        handleMouseLeave(event) {
            console.log(event);
        },
        handleDoubleClick(event, newX, newY) {
            console.log(event, newX, newY);
        },
        handleMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    },
}).mount("#app");
