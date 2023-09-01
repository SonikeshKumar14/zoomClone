import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "zoom-clone-2e712.firebaseapp.com",
  projectId: "zoom-clone-2e712",
  storageBucket: "zoom-clone-2e712.appspot.com",
  messagingSenderId: "802891934489",
  appId: "1:802891934489:web:8b79763af7fb1be3a0b388",
  measurementId: "G-HFNW3F462D",
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
