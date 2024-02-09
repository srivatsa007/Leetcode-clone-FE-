// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVCs_zX-6sPF21YK_mfw5b5SNLMhkWfY",
  authDomain: "leetcode-clone-580f3.firebaseapp.com",
  projectId: "leetcode-clone-580f3",
  storageBucket: "leetcode-clone-580f3.appspot.com",
  messagingSenderId: "328947231979",
  appId: "1:328947231979:web:7d2e228c8e0b792ac822ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;