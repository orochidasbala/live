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
        <p v-if="error">Error : {{ error }}</p>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import {
    createUserWithEmailAndPassword,
    debugErrorMap,
    updateProfile,
} from "@firebase/auth";
import { auth } from "@/firebase/config";
export default {
    setup() {
        let username = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref(null);

        let signupNow = async () => {
            try {
                let res = await createUserWithEmailAndPassword(
                    auth,
                    email.value,
                    password.value
                );
                if (!res) {
                    throw new Error(
                        "can't create new account. something went wrong!"
                    );
                }
                await updateProfile(res.user, { displayName: username.value });
                console.log(res.user);
            } catch (err) {
                error.value = err.message;
            }
        };

        return { username, email, password, signupNow, error };
    },
};
</script>

<style></style>
