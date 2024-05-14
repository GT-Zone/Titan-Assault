import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBPPnVD3KGkqEkocbbP-yGCYExYYEsrAFw",
  authDomain: "titan-b41af.firebaseapp.com",
  projectId: "titan-b41af",
  storageBucket: "titan-b41af.appspot.com",
  messagingSenderId: "551977332504",
  appId: "1:551977332504:web:cd20f0b84ea13c9fa1786d",
  measurementId: "G-TGKWY7ZKL5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
