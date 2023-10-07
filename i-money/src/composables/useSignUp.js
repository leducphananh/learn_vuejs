import { firestoreAuth } from '@/configs/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);
const pending = ref(false);

const signUp = async (email, password, fullName) => {
    error.value = null;
    pending.value = true;
    try {
        const userCredential = await createUserWithEmailAndPassword(
            firestoreAuth,
            email,
            password
        );
        if (!userCredential) throw new Error('Could not create a new user');

        await updateProfile(firestoreAuth.currentUser, {
            displayName: fullName,
        });

        return userCredential;
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        pending.value = false;
    }
};

export const useSignUp = () => {
    return {
        error,
        pending,
        signUp,
    };
};
