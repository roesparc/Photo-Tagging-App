import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwWVoa8v9FCcMFmAnmgIilLn1fPgleYIY",
  authDomain: "photo-tagging-app-c0c07.firebaseapp.com",
  projectId: "photo-tagging-app-c0c07",
  storageBucket: "photo-tagging-app-c0c07.appspot.com",
  messagingSenderId: "538596518089",
  appId: "1:538596518089:web:1fb258b4fbf71b198a4518",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
