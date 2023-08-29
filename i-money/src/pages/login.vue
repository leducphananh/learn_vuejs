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
                        />
                    </label>
                </div>
                <div class="row">
                    <button
                        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>

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
export default {
    setup() {
        const onSubmit = () => {
            //
        };

        return {
            onSubmit,
        };
    },
};
</script>
