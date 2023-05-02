const { createApp } = Vue;

createApp({
    template: `<div class="card-container card-actions">
    <div class="card" @mouseover="handleMouseOver">Mouse Over</div>
    <div class="card" @mouseleave="handleMouseLeave">
        Mouse Leave
    </div>
    <div
        class="card"
        @dblclick="handleDoubleClick($event, 150, 100)"
    >
        Double Click
    </div>
    <div class="card" @mousemove="handleMouseMove">
        Mouse Move: {{ (x) + '-' + (y) }}
    </div>
</div>

<div class="card-container card-products">
    <div
        class="card"
        v-for="product in products"
        :class="{ cart: product.isInCart }"
        @click="handleCardClick($event, product)"
    >
        <img v-bind:src="product.thumb" class="card-thumb" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
    </div>
</div>

<div class="card-container card-products">
    <h3>Products Computed</h3>
    <div
        class="card"
        v-for="product in productsComputed"
        :class="{ cart: product.isInCart }"
        @click="handleCardClick($event, product)"
    >
        <img v-bind:src="product.thumb" class="card-thumb" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
    </div>
</div>`,

    data() {
        return {
            x: 0,
            y: 0,
            products: [
                {
                    name: "Sản phẩm A",
                    price: 120.0,
                    thumb: "./assets/images/images-1.jpeg",
                    isInCart: false,
                },
                {
                    name: "Sản phẩm B",
                    price: 80.0,
                    thumb: "./assets/images/images-2.jpeg",
                    isInCart: false,
                },
                {
                    name: "Sản phẩm C",
                    price: 160.0,
                    thumb: "./assets/images/images-3.jpg",
                    isInCart: true,
                },
            ],
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

        handleCardClick(event, product) {
            product.isInCart = !product.isInCart;
        },
    },

    computed: {
        productsComputed() {
            return this.products.filter((product) => product.price < 160);
        },
    },
}).mount("#app");
