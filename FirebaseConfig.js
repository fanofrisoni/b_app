// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk1NprDf-nXTlmiWepSre-qizMoAyrFHU",
  authDomain: "b-appl.firebaseapp.com",
  projectId: "b-appl",
  storageBucket: "b-appl.appspot.com",
  messagingSenderId: "778404229692",
  appId: "1:778404229692:web:33d8f276b57825a26d0939"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);