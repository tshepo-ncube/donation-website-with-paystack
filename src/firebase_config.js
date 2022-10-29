import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup  } from "firebase/auth";
//import { signInWithPopup } from "firebase/auth";


import { OAuthProvider } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
//import { getAuth, signInWithPopup, OAuthProvider  } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDXOy1ydN0jDjVwJcbZ3Z1xqAKwFAfrjxg",
    authDomain: "todo-23b16.firebaseapp.com",
    projectId: "todo-23b16",
    storageBucket: "todo-23b16.appspot.com",
    messagingSenderId: "223701349469",
    appId: "1:223701349469:web:4a6947624e4b4c317c09b4",
    measurementId: "G-M49LYZB5M6"
  
  };
  

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
//export const provider = new OAuthProvider();'https://todo-23b16.firebaseapp.com/__/auth/handler'
export const providerMS = new OAuthProvider('microsoft.com');


export const provider = new GoogleAuthProvider();