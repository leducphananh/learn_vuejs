<template>
    <teleport to="body">
        <BaseModal
            v-if="isShowModal"
            title="This is title"
            content="This is content modal"
            theme="example"
            @closeModal="onToggleModal"
        >
            <!-- slot for header -->
            <template v-slot:header>
                <h2>This is header</h2>
            </template>

            <!-- slot for footer -->
            <template v-slot:footer>
                <button @click="onToggleModal" class="btn btn-primary">
                    Save changes
                </button>
            </template>

            <!-- default slot -->
            <label for="name">Name</label>
            <input name="name" type="text" />
            <p>Woohoo, you're reading this text in a modal!</p>
        </BaseModal>
    </teleport>

    <button @click="onToggleModal" class="btn btn-secondary">
        Toggle modal
    </button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    components: {
        BaseModal: Modal,
    },

    data() {
        return {
            isShowModal: false,
        };
    },

    methods: {
        onToggleModal() {
            console.log("close modal");
            this.isShowModal = !this.isShowModal;
        },
    },
};
</script>
