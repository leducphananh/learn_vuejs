<template>
    <div class="row" v-if="user">
        <div class="container mx-auto p-8">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img
                        class="w-full h-auto object-cover"
                        :src="
                            user.photoURL ||
                            'data:image/png;base64,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'
                        "
                        alt="avatar"
                        referrerpolicy="no-referrer"
                    />
                </div>
                <div class="font-bold text-2xl text-primary mt-3">
                    {{ user.displayName }}
                </div>
                <div class="font-semibold text-gray-400 mt-1">
                    {{ user.email }}
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="container mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-primary mb-8">General</h3>
                </div>
            </div>

            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul>
                        <li
                            v-for="(profileOption, index) in PROFILE_OPTIONS"
                            :key="index"
                            class="last:text-red"
                        >
                            <router-link
                                :to="profileOption.route"
                                class="flex items-center justify-between py-3"
                            >
                                <div class="flex items-center text-left gap-3">
                                    <font-awesome-icon
                                        :icon="profileOption.icon"
                                        class="text-2xl"
                                    />
                                    <h5 class="font-semibold">
                                        {{ profileOption.name }}
                                    </h5>
                                </div>
                                <div class="text-right">
                                    <font-awesome-icon
                                        icon="fa-solid fa-chevron-right"
                                    />
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUser } from '@/composables/useUser';
import { PROFILE_OPTIONS } from '@/utils/constants';

export default {
    setup() {
        const { getUser } = useUser();
        const { user } = getUser();

        return {
            PROFILE_OPTIONS,
            user,
        };
    },
};
</script>
