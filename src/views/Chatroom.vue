<template>
    <div class="container">
        <Navbar></Navbar>
        <ChatWindow></ChatWindow>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from "../components/ChatForm";
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar";
import router from "@/router";
import getUser from "@/composable/getUser";
export default {
    components: {
    ChatWindow,
        ChatForm,
        Navbar,
    },
    setup() {
        let { user } = getUser();
        watch(user, () => {
            if (!user.value) {
                router.push({ name: "Welcome" });
            } else {
                console.log("you've something forgot, pls check your code");
            }
        });
    },
};
</script>

<style></style>
