import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLTKIB3XS65YOL1g0Tb0syUbbv2IByn8Y",
    authDomain: "tinder-clone-9f587.firebaseapp.com",
    projectId: "tinder-clone-9f587",
    storageBucket: "tinder-clone-9f587.appspot.com",
    messagingSenderId: "186924941375",
    appId: "1:186924941375:web:df66932671155b02bf388a",
    measurementId: "G-YG5JRKDSM5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;