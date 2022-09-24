<template>
    <div class="textarea">
        <textarea
            v-model="message"
            placeholder="type text here"
            @keypress.enter="handelSubmit"
        ></textarea>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getUser from '@/composable/getUser';
import { timeStamp } from '@/firebase/config';
import useCollection from '../composable/useCollection';
export default {
    setup() {
        let message = ref(null);
        let { user } = getUser();
        let { error, adDoc } = useCollection('messages');

        let handelSubmit = async () => {
            let chatInfo = {
                message: message.value,
                username: user.value.displayName,
                createdAt: timeStamp(),
            };

            await adDoc(chatInfo);

            console.log(chatInfo);
            message.value = null;
        };

        return { message, handelSubmit };
    },
};
</script>

<style>
.textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #eee;
}
textarea {
    margin: 2px auto;
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    box-sizing: border-box;
    outline: none;
    border: none;
}
</style>
