import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3gN7ScuU4dIvuEXvRkeYdDJb8Xglm7C0",
  authDomain: "todo-app-dc68e.firebaseapp.com",
  projectId: "todo-app-dc68e",
  storageBucket: "todo-app-dc68e.appspot.com",
  messagingSenderId: "342705318868",
  appId: "1:342705318868:web:8a3b3cdb8acf6b704b4441",
  measurementId: "G-YQSS0KRWQX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
