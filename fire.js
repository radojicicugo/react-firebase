
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBH23Csayr4pqH3VEY_iyyM02ET82awuaQ",
    authDomain: "crud-vezba.firebaseapp.com",
    projectId: "crud-vezba",
    storageBucket: "crud-vezba.appspot.com",
    messagingSenderId: "73226235424",
    appId: "1:73226235424:web:3cd9657800054438119645"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { storage, db, fire as default }
