
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "enter API key",
  authDomain: "  ",
  projected: "  ",
  storageBucket: "  ",
  messagingSenderId: "  ",
  appId: "    ",
  measurementId: "  ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
