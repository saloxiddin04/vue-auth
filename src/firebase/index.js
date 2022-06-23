import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDevlZSnEkHKjwMB2_RAWDLgDBa1SjZncc",
    authDomain: "vue-auth-374be.firebaseapp.com",
    projectId: "vue-auth-374be",
    storageBucket: "vue-auth-374be.appspot.com",
    messagingSenderId: "824649389005",
    appId: "1:824649389005:web:e020a2c09d6ebd30f12a84"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }