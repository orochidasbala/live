<template>
    <form class="form" @submit.prevent="loginNow">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button>Login account</button>
        <p v-if="error" class="error">Error : {{ error }}</p>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composable/useLogin";
export default {
    setup() {
        let email = ref("");
        let password = ref("");
        let { error, loginAcc } = useLogin();
        let loginNow = async () => {
            let res = await loginAcc(email.value, password.value);
            if (res) {
                console.log(res.user);
            } else {
                console.log(error.value);
            }
        };

        return { email, password, loginNow, error };
    },
};
</script>

<style></style>
