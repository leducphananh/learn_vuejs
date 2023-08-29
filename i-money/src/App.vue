<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import { PUBLIC_LAYOUT } from '@/utils/constants';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'App',
    setup() {
        const route = useRoute();

        return {
            layout: computed(
                () => (route.meta.layout || PUBLIC_LAYOUT) + '-layout'
            ),
        };
    },
};
</script>
