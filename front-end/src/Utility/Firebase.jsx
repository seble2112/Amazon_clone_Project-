
import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWouV4HTC3c5n6llKGKiDSgyO6C9c_le0",
  authDomain: "clone-20b7f.firebaseapp.com",
  projectId: "clone-20b7f",
  storageBucket: "clone-20b7f.firebasestorage.app",
  messagingSenderId: "396678764477",
  appId: "1:396678764477:web:91142043e8fc507b42a4d4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()