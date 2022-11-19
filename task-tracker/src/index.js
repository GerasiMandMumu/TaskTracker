import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import { FirebaseAppProvider } from 'reactfire';


// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyDM2FgNePDBLbA47jUciQa21Yb9iKViL2A",
  authDomain: "tasktracker-eec9e.firebaseapp.com",
  databaseURL: "https://tasktracker-eec9e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tasktracker-eec9e",
  storageBucket: "tasktracker-eec9e.appspot.com",
  messagingSenderId: "871265686449",
  appId: "1:871265686449:web:9e4b9eac895ce5bcd9a390",
  measurementId: "G-7PFRQHL9JX"
});

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App/>
  </FirebaseAppProvider>,
  document.getElementById('root')
);