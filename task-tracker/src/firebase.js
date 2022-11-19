import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDM2FgNePDBLbA47jUciQa21Yb9iKViL2A",
    authDomain: "tasktracker-eec9e.firebaseapp.com",
    projectId: "tasktracker-eec9e",
    storageBucket: "tasktracker-eec9e.appspot.com",
    messagingSenderId: "871265686449",
    appId: "1:871265686449:web:9e4b9eac895ce5bcd9a390",
    measurementId: "G-7PFRQHL9JX"
  };
  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();