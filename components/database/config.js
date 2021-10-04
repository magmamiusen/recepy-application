import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyDHxZl-yw-QQCapODBmRkd6ce-_oRfR68Y",
  authDomain: "recepy-application-b3026.firebaseapp.com",
  projectId: "recepy-application-b3026",
  storageBucket: "recepy-application-b3026.appspot.com",
  messagingSenderId: "661566986347",
  appId: "1:661566986347:web:fb506bd498dfbd4094b92e",
  measurementId: "G-XSZP7J53WL"
};

const app = initializeApp(config);
const analytics = getAnalytics(app);