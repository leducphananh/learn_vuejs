import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC54yj-6dELJWdAqeiyUnxzqn_HcEauYvA",
    authDomain: "imoney-f258d.firebaseapp.com",
    projectId: "imoney-f258d",
    storageBucket: "imoney-f258d.appspot.com",
    messagingSenderId: "1072900333213",
    appId: "1:1072900333213:web:8122fdaf0ae4e8dd8c3e74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
