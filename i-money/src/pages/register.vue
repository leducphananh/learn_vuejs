<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
                <div class="row">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input
                            id="fullName"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            placeholder="iMoney"
                            type="text"
                            autocomplete="off"
                            v-model="user.fullName"
                        />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email address</span>
                        <input
                            id="email"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            placeholder="example@gmail.com"
                            type="email"
                            autocomplete="off"
                            v-model="user.email"
                        />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input
                            id="password"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            placeholder="Example"
                            type="password"
                            autocomplete="off"
                            v-model="user.password"
                        />
                    </label>
                </div>
                <div class="row">
                    <button
                        v-if="!signUpPending"
                        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <button
                        v-else
                        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg opacity-60 cursor-not-allowed"
                        type="button"
                        disabled
                    >
                        Loading...
                    </button>
                </div>
            </form>

            <div v-if="signUpError" class="text-left mt-4">
                <span class="text-red">{{ signUpError }}</span>
            </div>

            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm already a member.</span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Login', params: {} }"
                        class="text-primary font-bold"
                        >Sign In</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { useSignUp } from '@/composables/useSignUp';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const user = reactive({
            fullName: '',
            email: '',
            password: '',
        });

        const {
            error: signUpError,
            pending: signUpPending,
            signUp,
        } = useSignUp();

        const onSubmit = async () => {
            await signUp(user.email, user.password, user.fullName);
            if (!signUpError.value) router.push({ name: 'Home' });
        };

        return {
            user,
            onSubmit,
            signUpError,
            signUpPending,
        };
    },
};
</script>
