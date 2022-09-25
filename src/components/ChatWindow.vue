<template>
    <div class="chatwindow">
        <div class="messages">
            <div
                class="single"
                v-for="message in formattedMessages"
                :key="message.id"
            >
                <span class="created_at">{{ message.createdAt }}</span>
                <span class="name">{{ message.username }} :</span>
                <span class="text">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { computed, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup() {
        const messages = ref([]);
        const messagesCollectionRef = collection(db, 'messages');
        const messagesCollectionQuery = query(
            messagesCollectionRef,
            orderBy('createdAt', 'asc')
        );

        onSnapshot(messagesCollectionQuery, (querySnapshot) => {
            const messageDoc = [];
            querySnapshot.docs.forEach((doc) => {
                const docs = { ...doc.data(), id: doc.id };
                doc.data().createdAt && messageDoc.push(docs);
            });
            messages.value = messageDoc;
        });

        const formattedMessages = computed(() => {
            return messages.value.map((msg) => {
                let formatteTime = formatDistanceToNow(msg.createdAt.toDate());
                return { ...msg, createdAt: formatteTime };
            });
        });

        return { formattedMessages };
    },
};
</script>

<style>
.chatwindow {
    padding: 20px;
    background-color: #eee;
    border-radius: 10px;
}
.messages {
    max-height: 300px;
    overflow: auto;
}
.single {
    margin: 18px 0;
}
.created_at {
    display: block;
    color: #aaa;
    font-size: 14px;
    padding-bottom: 10px;
}
.name {
    color: rgb(0, 138, 108);
    padding-right: 20px;
    font-weight: bold;
    font-size: 16px;
}
.messages {
    color: #222;
    font-size: 15px;
}
</style>
