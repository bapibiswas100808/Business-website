// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0XB0j9Qv0yCsrcJVYnd8Zb9MUy6cliyU",
  authDomain: "business-website-f32be.firebaseapp.com",
  projectId: "business-website-f32be",
  storageBucket: "business-website-f32be.appspot.com",
  messagingSenderId: "600951506677",
  appId: "1:600951506677:web:18b9341c33a2359500a7bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
