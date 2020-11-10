import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyAtIletffSOY-Ha5cXrUn-hUSGkxcCicA4",
    authDomain: "padi-online.firebaseapp.com",
    databaseURL: "https://padi-online.firebaseio.com",
    projectId: "padi-online",
    storageBucket: "padi-online.appspot.com",
    messagingSenderId: "355121090447",
    appId: "1:355121090447:web:79fa78fb389b848f5285fa",
    measurementId: "G-5GFPDRTVGM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase