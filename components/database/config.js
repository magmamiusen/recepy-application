//Importacion de los servisios de firebase, necesarios para el manejo de datos de la App
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; 

//Configuracion de nuestra app, para sincronizarlo con la consola de firebase
const config = {
  apiKey: "AIzaSyDHxZl-yw-QQCapODBmRkd6ce-_oRfR68Y",
  authDomain: "recepy-application-b3026.firebaseapp.com",
  projectId: "recepy-application-b3026",
  storageBucket: "recepy-application-b3026.appspot.com",
  messagingSenderId: "661566986347",
  appId: "1:661566986347:web:fb506bd498dfbd4094b92e",
  measurementId: "G-XSZP7J53WL"
};

//Inicializacion de los servisios que usaremos en nuestra App
const app = initializeApp(config);
const analytics = getAnalytics(app);
export const database = getFirestore();