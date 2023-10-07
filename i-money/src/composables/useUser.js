import { firestoreAuth } from '@/configs/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const user = ref(firestoreAuth.currentUser);

onAuthStateChanged(firestoreAuth, (_user) => {
    if (_user) user.value = _user;
});

const getUser = () => {
    return { user };
};

export const useUser = () => {
    return {
        getUser,
    };
};
