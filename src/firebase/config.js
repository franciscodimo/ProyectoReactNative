import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlqDJcvQsycjniN9XKn4F8CW_kZ0cVr_o",
  authDomain: "proyectofirebase-6e863.firebaseapp.com",
  projectId: "proyectofirebase-6e863",
  storageBucket: "proyectofirebase-6e863.appspot.com",
  messagingSenderId: "730645675627",
  appId: "1:730645675627:web:f33a54a8bd272ca6f5bb2e"
};


app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();