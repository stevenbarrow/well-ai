import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDBjtKTdNDSdg44eN8ES8ZOYK76wPuchBg",
    authDomain: "well-life-ai.firebaseapp.com",
    projectId: "well-life-ai",
    storageBucket: "well-life-ai.appspot.com",
    messagingSenderId: "620836755089",
    appId: "1:620836755089:web:0c9272d460f54362555130"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};