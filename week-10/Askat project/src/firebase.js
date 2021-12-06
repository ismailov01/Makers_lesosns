import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxRNfLqDkWoxafaWc-nG4TUyhVPM050EA",
  authDomain: "gang-store-870dc.firebaseapp.com",
  projectId: "gang-store-870dc",
  storageBucket: "gang-store-870dc.appspot.com",
  messagingSenderId: "298188927638",
  appId: "1:298188927638:web:8aa305ae05cb982dcfc8b7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
