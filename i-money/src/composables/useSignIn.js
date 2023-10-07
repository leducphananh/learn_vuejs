import { firestoreAuth } from '@/configs/firebase';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);
const pending = ref(false);
const googleProvider = new GoogleAuthProvider();

const signIn = async (email, password) => {
    error.value = null;
    pending.value = true;
    try {
        const userCredential = await signInWithEmailAndPassword(
            firestoreAuth,
            email,
            password
        );

        return userCredential;
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        pending.value = false;
    }
};

const signInGoogle = async () => {
    try {
        const result = await signInWithPopup(firestoreAuth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        return {
            token,
            user,
        };
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        pending.value = false;
    }
};

export const useSignIn = () => {
    return {
        error,
        pending,
        signIn,
        signInGoogle,
    };
};
