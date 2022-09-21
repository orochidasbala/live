import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKAigktTthb5N6ob2FAyfja5HPU8o0llY",
    authDomain: "livechatroom-19546.firebaseapp.com",
    projectId: "livechatroom-19546",
    storageBucket: "livechatroom-19546.appspot.com",
    messagingSenderId: "382608810136",
    appId: "1:382608810136:web:5e7c7e8dc6dcdacd9af0ed",
    measurementId: "G-4ZM2MV9S85",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const timeStamp = Timestamp.now;

export { app, db, auth, timeStamp };
