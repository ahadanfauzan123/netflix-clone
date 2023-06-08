// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDUxpGeM8BpIKBwe3gGRaTQ99Wn5y5B2o",
  authDomain: "netflix-clone-39f18.firebaseapp.com",
  projectId: "netflix-clone-39f18",
  storageBucket: "netflix-clone-39f18.appspot.com",
  messagingSenderId: "1026201284962",
  appId: "1:1026201284962:web:b134996fa0a5a7d71fbc3b",
  measurementId: "G-56EMG9W845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
