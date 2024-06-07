// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAtwBL5WDQWHMxQrhxX0U6ik6aYDw86Ng",
  authDomain: "tour-planners-ltd.firebaseapp.com",
  projectId: "tour-planners-ltd",
  storageBucket: "tour-planners-ltd.appspot.com",
  messagingSenderId: "293504144312",
  appId: "1:293504144312:web:aafbce60db1848688db54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth