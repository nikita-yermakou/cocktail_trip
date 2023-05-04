import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzh22nqVXmpEQZLmoIqm31zdzh1drnjlU",
    authDomain: "cocktail-trip.firebaseapp.com",
    projectId: "cocktail-trip",
    storageBucket: "cocktail-trip.appspot.com",
    messagingSenderId: "263674304880",
    appId: "1:263674304880:web:85f13bf06307f03dbd97b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);