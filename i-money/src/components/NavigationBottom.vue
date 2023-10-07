<template>
    <footer class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4">
        <div class="container mx-auto px-8 h-full">
            <ul
                class="h-full flex justify-between items-center [&>*:nth-child(2)]:mr-[10%] [&>*:nth-child(3)]:ml-[10%]"
            >
                <li v-for="(navItem, index) in NAVBAR_BOTTOM" :key="index">
                    <router-link :to="navItem.route">
                        <font-awesome-icon
                            :icon="navItem.icon"
                            class="text-2xl"
                        />
                    </router-link>
                </li>
            </ul>
        </div>

        <div
            class="absolute w-[60px] h-[60px] bg-dark-light rounded-full -top-1/2 left-1/2 -translate-x-1/2 text-white flex items-center justify-center"
        >
            <div
                class="bg-primary w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                @click="addNewTransaction"
            >
                <font-awesome-icon icon="fa-solid fa-plus" />
            </div>
        </div>
    </footer>
</template>

<script>
import { NAVBAR_BOTTOM } from '@/utils/constants';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const addNewTransaction = () => {
            router.push({ name: 'NewTransaction' });
        };

        return {
            NAVBAR_BOTTOM,
            addNewTransaction,
        };
    },
};
</script>
