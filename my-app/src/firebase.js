
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXdvrJWwLFWYveP7TO2w5wpk3mqEZrod0",
  authDomain: "grow-f0e00.firebaseapp.com",
  projectId: "grow-f0e00",
  storageBucket: "grow-f0e00.appspot.com",
  messagingSenderId: "449711962254",
  appId: "1:449711962254:web:b382c5865298044f3331df",
  measurementId: "G-FRHLZEFFBQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){
    return firebase.firestore(app)
}