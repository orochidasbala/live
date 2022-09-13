<template>
    <form class="form" @submit.prevent="signupNow">
        <h1>Sign Up</h1>
        <input
            type="text "
            placeholder="Username"
            class="form-input"
            v-model="username"
            required
        />
        <input
            type="text"
            placeholder="Email"
            autocomplete="off"
            class="form-input"
            v-model="email"
            required
        />
        <input
            type="password"
            placeholder="Password"
            class="form-input"
            v-model="password"
            required
        />
        <button>Create account</button>
        <p v-if="error" class="error">Error : {{ error }}</p>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composable/useSignup";

export default {
    setup(props, context) {
        let username = ref("");
        let email = ref("");
        let password = ref("");

        let { error, cerateAccount } = useSignup();
        let signupNow = async () => {
            let res = await cerateAccount(
                username.value,
                email.value,
                password.value
            );
            if (res) {
                console.log(res.user);
                context.emit("goChatroom");
            } else {
                console.log(error.value);
            }
        };

        return { username, email, password, signupNow, error };
    },
};
</script>

<style>
h1 {
    margin: 20px;
}
</style>
