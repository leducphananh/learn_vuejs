<script>
import { computed, ref } from 'vue';
import useDebounce from '@/hooks/useDebounce';

export default {
    setup() {
        const names = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren'];
        const searchTerm = ref('');
        const debounceSearchTerm = useDebounce(searchTerm, 500);

        const filteredNames = computed(() =>
            names.filter((name) =>
                name.toLowerCase().includes(debounceSearchTerm.value)
            )
        );

        return { filteredNames, searchTerm };
    },
};
</script>

<template>
    <div>This is Home page</div>
    <input v-model="searchTerm" />
    <ul>
        <li v-for="(name, index) in filteredNames" :key="index">
            {{ name }}
        </li>
    </ul>
</template>
