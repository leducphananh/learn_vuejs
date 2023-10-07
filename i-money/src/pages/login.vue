<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
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
                        v-if="!signInPending"
                        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <button
                        v-else
                        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg opacity-60 cursor-not-allowed"
                        type="button"
                        disabled
                    >
                        Loading...
                    </button>
                    <button
                        @click="signInWithGoogle"
                        type="button"
                        class="w-full py-3 text-center bg-[#4285F4] text-white mt-4 rounded-lg flex items-center justify-center gap-2"
                    >
                        <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"
                        >
                            <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                            ></path></svg
                        >Sign In With Google
                        <div></div>
                    </button>
                </div>
            </form>

            <div v-if="signInError" class="text-left mt-4">
                <span class="text-red">{{ signInError }}</span>
            </div>

            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm a new user.</span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Register', params: {} }"
                        class="text-primary font-bold"
                        >Sign Up</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { useSignIn } from '@/composables/useSignIn';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const user = reactive({
            email: '',
            password: '',
        });

        const {
            error: signInError,
            pending: signInPending,
            signIn,
            signInGoogle,
        } = useSignIn();

        const onSubmit = async () => {
            await signIn(user.email, user.password);
            if (!signInError.value) router.push({ name: 'Profile' });
        };

        const signInWithGoogle = async () => {
            await signInGoogle();
            if (!signInError.value) router.push({ name: 'Profile' });
        };

        return {
            onSubmit,
            user,
            signInError,
            signInPending,
            signInWithGoogle,
        };
    },
};
</script>
