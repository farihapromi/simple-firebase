// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA7uRoIfBDKelKNduJEkOuvu89vz6Q-Hco',
  authDomain: 'simple-firebase-9d80a.firebaseapp.com',
  projectId: 'simple-firebase-9d80a',
  storageBucket: 'simple-firebase-9d80a.firebasestorage.app',
  messagingSenderId: '418964988473',
  appId: '1:418964988473:web:fcca3670465ad67332e3e8',
  measurementId: 'G-8WREP5GDSM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
