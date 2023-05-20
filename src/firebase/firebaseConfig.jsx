// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBXhnXon_rema6-nM1KadQL_kS6uj2z7M",
  authDomain: "norfolk-58177.firebaseapp.com",
  projectId: "norfolk-58177",
  storageBucket: "norfolk-58177.appspot.com",
  messagingSenderId: "1086390819179",
  appId: "1:1086390819179:web:d2d4f945881091dc45942e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
