import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAG_7FKZ-88GPWJYKPVi_353e_YyjOm420",
    authDomain: "interact-us.firebaseapp.com",
    databaseURL: "https://interact-us.firebaseio.com",
    projectId: "interact-us",
    storageBucket: "interact-us.appspot.com",
    messagingSenderId: "293643746850",
    appId: "1:293643746850:web:b0486f738497b71e7b547b",
    measurementId: "G-73MQWSXRE7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase