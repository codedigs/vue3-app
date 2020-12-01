import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAR-WWjIZaoqdsOSfhDn2v5vCeU_YFIymk",
    authDomain: "vue3-auth.firebaseapp.com",
    databaseURL: "https://vue3-auth.firebaseio.com",
    projectId: "vue3-auth",
    storageBucket: "vue3-auth.appspot.com",
    messagingSenderId: "191514126889",
    appId: "1:191514126889:web:8b12a7951d61c76bed0a38",
    measurementId: "G-7L8M0JPME1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;