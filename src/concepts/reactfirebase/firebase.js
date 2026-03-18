// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB-aiSrEEljXzJPqRqh8FHU_scuYtuNPdA",
  authDomain: "react-firebase-project-7dcda.firebaseapp.com",
  projectId: "react-firebase-project-7dcda",
  storageBucket: "react-firebase-project-7dcda.firebasestorage.app",
  messagingSenderId: "416313864824",
  appId: "1:416313864824:web:aa776026cc94de5deab38d",
  measurementId: "G-9Z5CTHNV05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
