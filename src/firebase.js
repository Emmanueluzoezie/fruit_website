import firebase from "firebase/app"
import firestore from "firebase/app"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKOeJlMjA43jIMskcGwC-caJIWY58IviE",
    authDomain: "dahlia-fruit.firebaseapp.com",
    projectId: "dahlia-fruit",
    storageBucket: "dahlia-fruit.appspot.com",
    messagingSenderId: "901945572867",
    appId: "1:901945572867:web:54e931a13338c42a18d836",
    measurementId: "G-Y153D2ZCCN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  export default db;