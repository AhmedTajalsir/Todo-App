import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDUvebMHJCFs7xlzdJov00WcoyNsp3ec8k",
    authDomain: "todo-app-95ae4.firebaseapp.com",
    projectId: "todo-app-95ae4",
    storageBucket: "todo-app-95ae4.appspot.com",
    messagingSenderId: "937126130491",
    appId: "1:937126130491:web:4ef06545e71a014e677d1e",
    measurementId: "G-791NRGDPDV"


});
const db = firebaseApp.firestore();

export { db } ;