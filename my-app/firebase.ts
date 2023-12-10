// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZKAms8jlhbnjgKkgCsBTGThU2Z7GsBjU",
  authDomain: "securityai-605bd.firebaseapp.com",
  projectId: "securityai-605bd",
  storageBucket: "securityai-605bd.appspot.com",
  messagingSenderId: "187916968145",
  appId: "1:187916968145:web:08e1ed3a4c485288f4e5f0",
  measurementId: "G-X3V5FNV5TG"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};