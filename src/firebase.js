// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";const firebaseConfig = {
//   apiKey: "AIzaSyA2CBk6Xs-yYu2hvsNDl625Trlq4Xzv_0I",
//   authDomain: "linkedin-clone-yt-85fd1.firebaseapp.com",
//   projectId: "linkedin-clone-yt-85fd1",
//   storageBucket: "linkedin-clone-yt-85fd1.appspot.com",
//   messagingSenderId: "657278208540",
//   appId: "1:657278208540:web:ac1b676ec3d6a3dcd12dd9",
// };
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = getAuth();
// export { db, auth };
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2CBk6Xs-yYu2hvsNDl625Trlq4Xzv_0I",
  authDomain: "linkedin-clone-yt-85fd1.firebaseapp.com",
  projectId: "linkedin-clone-yt-85fd1",
  storageBucket: "linkedin-clone-yt-85fd1.appspot.com",
  messagingSenderId: "657278208540",
  appId: "1:657278208540:web:ac1b676ec3d6a3dcd12dd9"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
