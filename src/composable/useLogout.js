import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";

let error = ref(null);
let logout = async () => {
    try {
        await signOut(auth)
        console.log("user logged out")
    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

let useLogout = () => {
    return { error, logout }
}

export default useLogout;
