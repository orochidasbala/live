<template>
    <div class="chatwindow">
        <div class="messages">
            <div class="single">
                <span class="created_at">time</span>
                <span class="name">username</span>
                <span class="text">message</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, orderBy, query } from "@firebase/firestore/lite";
import { onSnapshot } from "@firebase/firestore";

export default {
    setup() {
        let collectionRef = collection(db, "messages");
        let q = query(collectionRef, orderBy("created_at", "desc"));

        onSnapshot(q, (quarySnap) => {
            console.log(quarySnap);
        });

        return { collectionRef };
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
