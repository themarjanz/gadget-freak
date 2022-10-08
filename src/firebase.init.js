// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKledmU6NNjWzvc5eD5IATaPrVfrCyNrE",
    authDomain: "gadget-freak-63cd6.firebaseapp.com",
    projectId: "gadget-freak-63cd6",
    storageBucket: "gadget-freak-63cd6.appspot.com",
    messagingSenderId: "20182914057",
    appId: "1:20182914057:web:bd2a235836a4106b9194d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;