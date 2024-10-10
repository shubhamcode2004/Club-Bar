// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCZ4GQjVTcSUpFZdstzVeGTL4Erts3pxA",
  authDomain: "theclubarr.firebaseapp.com",
  projectId: "theclubarr",
  storageBucket: "theclubarr.appspot.com",
  messagingSenderId: "270410981059",
  appId: "1:270410981059:web:e94ead755690eaa68bcc76",
  measurementId: "G-C0FEF3YJS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;