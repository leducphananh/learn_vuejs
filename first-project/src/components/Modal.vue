<template>
    <div class="modal fade" @click="onCloseModal"></div>
    <div class="modal-dialog">
        <div
            class="modal-content"
            :class="{ 'bg-purple': theme === 'contact' }"
        >
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-body">
                <slot />
            </div>
            <div class="modal-footer">
                <button @click="onCloseModal" class="btn btn-secondary">
                    Close
                </button>
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: "",
        },
        theme: {
            type: String,
            default: "example",
            validator(value) {
                return ["example", "sales", "contact"].includes(value);
            },
        },
    },

    data() {
        return {};
    },

    methods: {
        onCloseModal() {
            this.$emit("closeModal");
        },
    },
};
</script>

<style lang="css" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
.fade {
    transition: opacity 0.15s linear;
}
.modal-dialog {
    max-width: 500px;
    margin: 4.75rem auto;
    position: absolute;
    inset: 0;
    width: auto;
    pointer-events: none;
    z-index: 2;
}
.modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-content.bg-purple {
    background-color: purple;
}
.modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}
.modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
    margin: 0.25rem;
}
</style>
