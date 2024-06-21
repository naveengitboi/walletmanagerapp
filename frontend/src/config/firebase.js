// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBDLZi2ol2mBJnm-tqGwqIea2fSUAovp0Q",
    authDomain: "wmanager-c0f16.firebaseapp.com",
    projectId: "wmanager-c0f16",
    storageBucket: "wmanager-c0f16.appspot.com",
    messagingSenderId: "898360731266",
    appId: "1:898360731266:web:063a7ac960bf38ec7a769b",
    measurementId: "G-1C8ELLLN1W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();