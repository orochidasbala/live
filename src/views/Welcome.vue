<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Signup @goChatroom="goChatroom" />
            <p>
                Already have an account?
                <span @click="showLoginForm = !showLoginForm">Login</span>
            </p>
        </div>
        <div v-else>
            <Login @goChatroom="goChatroom" />
            <p>
                Create new account!
                <span @click="showLoginForm = !showLoginForm">Sign Up</span>
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Login from "../components/Login";
import Signup from "../components/Signup";
import router from "@/router";
export default {
    components: {
        Login,
        Signup,
    },
    setup() {
        let showLoginForm = ref(false);
        let goChatroom = () => {
            router.push({ name: "Chatroom" });
        };

        return { showLoginForm, goChatroom };
    },
};
</script>

<style>
p {
    color: #333;
    margin: 10px;
}
p span {
    color: rgb(0, 123, 157);
    cursor: pointer;
}
</style>
