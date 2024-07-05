
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBLBCJ2fTw8VVqyeiknDRLyrS-pSZV1lqI",
  authDomain: "array-edit.firebaseapp.com",
  projectId: "array-edit",
  storageBucket: "array-edit.appspot.com",
  messagingSenderId: "743445630410",
  appId: "1:743445630410:web:b56f5459ecdd76bdab9333",
  measurementId: "G-V107R5M9FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);