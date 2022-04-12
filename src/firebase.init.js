// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0PVSAJZdsAWb5nzRibAG3jI6hWXXZ6W8",
  authDomain: "alishan-resorts.firebaseapp.com",
  projectId: "alishan-resorts",
  storageBucket: "alishan-resorts.appspot.com",
  messagingSenderId: "53477054466",
  appId: "1:53477054466:web:276b98d807ec72d1002f1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
