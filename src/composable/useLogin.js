import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config"

let error = ref(null)
let loginAcc = async (email, password) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error("can not login, something went wrong")
        }
        return res;
    } catch (err) {
        error.value = err.message
    }
}

let useLogin = () => {
    return { error, loginAcc }
}

export default useLogin;