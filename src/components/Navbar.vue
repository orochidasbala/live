<template>
    <nav v-if="user">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Email: {{ user.email }}</p>
        </div>
        <button @click="logoutNow">Logout</button>
    </nav>
</template>

<script>
import { onAuthStateChanged, updateCurrentUser } from "@firebase/auth";
import useLogout from "../composable/useLogout";
import { ref } from "@vue/reactivity";
import getUser from "../composable/getUser";

export default {
    setup() {
        let { error, logout } = useLogout();
        let { user } = getUser();

        let logoutNow = async () => {
            await logout();
        };

        return { logoutNow, user };
    },
};
</script>

<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>
