const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Nguyen Van A",
            isShowModal: false,
        };
    },

    methods: {
        handleNameChange() {
            this.name = "Le Thi B";
            this.isShowModal = !this.isShowModal;
        },
    },

    template: `<h1>Hello {{ name }}</h1>
    <!-- <button v-on:click="handleNameChange">Change name</button> -->
    <button @click="handleNameChange">
        Change name alternative way
    </button>

    <div class="modal" v-if="isShowModal">
        <h1>Modal content</h1>
    </div>`,
}).mount("#app");
