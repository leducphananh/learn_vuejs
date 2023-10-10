import { useUser } from '@/composables/useUser';
import { firebaseStorage } from '@/configs/firebase';
import { ref as storageRef, uploadBytes } from 'firebase/storage';
import { ref } from 'vue';

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
    const error = ref(null);

    const uploadFile = async (file) => {
        const path = `${name}/${user.value.uid}/${file.name}`;
        const fileRef = storageRef(firebaseStorage, path);
        error.value = null;
        try {
            const response = await uploadBytes(fileRef, file);
            return response;
        } catch (err) {
            console.error(err);
            error.value = err.message;
        }
    };

    return {
        error,
        uploadFile,
    };
};

export default useStorage;
