<template>
    <h1>Logout page</h1>
</template>

<script>
import { useSignOut } from '@/composables/useSignOut';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const { error: signOutError, signOut } = useSignOut();

        const logOut = async () => {
            await signOut();
            if (!signOutError.value) router.push({ name: 'Login' });
        };

        logOut();

        return { signOutError };
    },
};
</script>
