// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtMbpwbB_e7Rm0f3Jbv5eUCfkTnvcV1bw",
    authDomain: "colorplattes.firebaseapp.com",
    projectId: "colorplattes",
    storageBucket: "colorplattes.appspot.com",
    messagingSenderId: "688103371630",
    appId: "1:688103371630:web:c6926d14aedd761af5877f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();