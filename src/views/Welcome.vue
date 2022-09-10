<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Signup />
            <p>
                Already have an account?
                <span @click="showLoginForm = !showLoginForm">Login</span>
            </p>
        </div>
        <div v-else>
            <Login />
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
export default {
    components: {
        Login,
        Signup,
    },
    setup() {
        let showLoginForm = ref(true);

        return { showLoginForm };
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
