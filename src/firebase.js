import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcgdJhlQySy9z_XmwrCeuuXmGxvETyCck",
    authDomain: "instaclone-1668d.firebaseapp.com",
    projectId: "instaclone-1668d",
    storageBucket: "instaclone-1668d.appspot.com",
    messagingSenderId: "619131251780",
    appId: "1:619131251780:web:f123cb6ebd90069c9b6011",
    measurementId: "G-2KM2DRSDJF"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};