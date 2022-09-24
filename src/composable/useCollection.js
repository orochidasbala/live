import { db } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { ref } from 'vue';

const useCollection = (collectionName) => {
    let error = ref(null);
    let adDoc = async (chatInfo) => {
        let dbRef = collection(db, collectionName);
        try {
            return addDoc(dbRef, chatInfo);
        } catch (err) {
            console.log(err.message);
            error.value = 'could not sent the message';
        }
    };
    return { error, adDoc };
};

export default useCollection;
