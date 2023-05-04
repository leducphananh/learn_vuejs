<template>
    <div class="main">
        <UserForm ref="userForm" @onAdd="onAdd" @onUpdate="onUpdate" />
        <UserList :users="users" @onEdit="onEdit" @onDelete="onDelete" />
    </div>
</template>

<script>
import { uuid } from "vue-uuid";
import UserForm from "./components/UserForm.vue";
import UserList from "./components/UserList.vue";
import { defaultUser } from "./utils/helpers";

export default {
    name: "App",
    components: { UserForm, UserList },

    data() {
        return {
            users: localStorage.getItem("users")
                ? JSON.parse(localStorage.getItem("users"))
                : [],
        };
    },

    methods: {
        onAdd(user) {
            this.users.push({
                ...user,
                id: uuid.v1(),
            });
            localStorage.setItem("users", JSON.stringify(this.users));
        },
        onUpdate(targetUser) {
            const indexOfUser = this.users.findIndex(
                (user) => user.id === targetUser.id
            );
            if (indexOfUser >= 0) {
                this.users[indexOfUser] = targetUser;
            }
            localStorage.setItem("users", JSON.stringify(this.users));
        },
        onEdit(targetUser) {
            this.$refs.userForm.user = { ...targetUser };
        },
        onDelete(targetUser) {
            this.users = this.users.filter((user) => user.id !== targetUser.id);
            this.$refs.userForm.user = { ...defaultUser };
            localStorage.setItem("users", JSON.stringify(this.users));
        },
    },
};
</script>
