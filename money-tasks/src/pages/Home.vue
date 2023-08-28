<template>
    <div>This is Home page</div>
    <input v-model="searchTerm" />
    <ul>
        <li v-for="(name, index) in filteredNames" :key="index">
            {{ name }}
        </li>
    </ul>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    setup() {
        const names = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren'];
        const searchTerm = ref('');
        const filteredNames = computed(() =>
            names.filter((name) =>
                name.toLowerCase().includes(searchTerm.value)
            )
        );

        return { filteredNames, searchTerm };
    },
};
</script>
