import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);
let cerateAccount = async (username, email, password) => {
    try {
        let res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        if (!res) {
            throw new Error(
                "can't create new account. something went wrong!"
            );
        }
        await updateProfile(res.user, { displayName: username});
        return res;
    } catch (err) {
        error.value = err.message;
    }
}

let useSignup = () => {
    return {error, cerateAccount}
}

export default useSignup;
