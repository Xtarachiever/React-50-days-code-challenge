import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPrN0J5OVnIu_Z33Zh7kqDAJz83s0bHw4",
  authDomain: "eshop-7a54b.firebaseapp.com",
  projectId: "eshop-7a54b",
  storageBucket: "eshop-7a54b.appspot.com",
  messagingSenderId: "192312316909",
  appId: "1:192312316909:web:7a1ea5581fffcc79680de4",
  measurementId: "G-QMW8MJYBRJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export {auth,db}