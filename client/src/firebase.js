// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-84695.firebaseapp.com",
  projectId: "mern-estate-84695",
  storageBucket: "mern-estate-84695.appspot.com",
  messagingSenderId: "989711115823",
  appId: "1:989711115823:web:c3f898967f8b516daf08da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
