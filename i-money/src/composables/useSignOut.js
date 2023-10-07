import { firestoreAuth } from '@/configs/firebase';
import { signOut as _signOut } from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);

const signOut = async () => {
    error.value = null;
    try {
        await _signOut(firestoreAuth);
    } catch (err) {
        console.error(err);
        error.value = err.message;
    }
};

export const useSignOut = () => {
    return {
        error,
        signOut,
    };
};
