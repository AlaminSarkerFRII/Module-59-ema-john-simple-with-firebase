// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGnE3n5IRwi8Y9AHHgQePPKzFMMlLn8I",
  authDomain: "ema-john-simple-with-firebase.firebaseapp.com",
  projectId: "ema-john-simple-with-firebase",
  storageBucket: "ema-john-simple-with-firebase.appspot.com",
  messagingSenderId: "258494511602",
  appId: "1:258494511602:web:22ad443e15bb160531536b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
