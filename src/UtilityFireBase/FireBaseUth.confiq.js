// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnb0-RXVwt1cpD4dW9cQrVO6Lz91B3l_c",
  authDomain: "afm-news.firebaseapp.com",
  projectId: "afm-news",
  storageBucket: "afm-news.firebasestorage.app",
  messagingSenderId: "318288836781",
  appId: "1:318288836781:web:421ab8cbc39dfca5182e24",
  measurementId: "G-7V4YD8HC32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;