// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZPG_hRhZHflFTjEqmiBApQHFbxXe_f4",
  authDomain: "fire-base-contact-fe698.firebaseapp.com",
  databaseURL: "https://fire-base-contact-fe698-default-rtdb.firebaseio.com",
  projectId: "fire-base-contact-fe698",
  storageBucket: "fire-base-contact-fe698.appspot.com",
  messagingSenderId: "26094937108",
  appId: "1:26094937108:web:486ad5205feee0b49b3301"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase