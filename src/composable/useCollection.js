import { db } from "@/firebase/config"
import { addDoc, collection } from "firebase/firestore/lite"
import { ref } from "vue"


let useCollection = (collection_name) => {

    let error = ref(null)
    let adDoc = async (chatInfo) => {
        let dbRef = collection(db, collection_name)
        try {
            await addDoc(dbRef, chatInfo)
        } catch (err) {
            console.log(err.message)
            error.value = "could not sent the message"
        }
    }


    return { error, adDoc }
}

export default useCollection;