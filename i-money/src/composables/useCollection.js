import { firestore } from '@/configs/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref } from 'vue';

const useCollection = (name) => {
    const error = ref(null);

    const addRecord = async (record) => {
        error.value = null;
        try {
            const docRef = await addDoc(collection(firestore, name), record);
            return docRef;
        } catch (err) {
            console.error(err);
            error.value = err.message;
        }
    };

    return {
        error,
        addRecord,
    };
};

export default useCollection;
