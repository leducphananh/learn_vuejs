<template>
    <div class="data">
        <h2>List Users</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Courses</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.dob }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.description }}</td>
                    <td>{{ user.courses.join(", ") }}</td>
                    <td>
                        <button
                            @click="this.$emit('onEdit', user)"
                            className="btn-control btn-control--edit"
                        >
                            Edit
                        </button>
                        &nbsp;&nbsp;
                        <button
                            @click="this.$emit('onDelete', user)"
                            className="btn-control btn-control--delete"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
