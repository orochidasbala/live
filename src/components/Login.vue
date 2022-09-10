<template>
    <form class="form" @submit.prevent="loginNow">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button>Login account</button>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    setup() {
        let email = ref("");
        let password = ref("");

        let loginNow = () => {
            console.log(email.value, password.value);
        };

        return { email, password, loginNow };
    },
};
</script>

<style></style>
