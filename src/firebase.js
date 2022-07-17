// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);