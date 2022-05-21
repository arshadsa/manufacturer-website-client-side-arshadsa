// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALeV-ezvQ73yUmRSM60pndrDHMmT9au20",
  authDomain: "manufacturer-arshad.firebaseapp.com",
  projectId: "manufacturer-arshad",
  storageBucket: "manufacturer-arshad.appspot.com",
  messagingSenderId: "635103329854",
  appId: "1:635103329854:web:86e89e5d04a6929ef2db6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;