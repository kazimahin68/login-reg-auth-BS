// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJj2skajRZfLWn9RNVMPs1D9OPEJAegT0",
  authDomain: "login-register-auth-bs.firebaseapp.com",
  projectId: "login-register-auth-bs",
  storageBucket: "login-register-auth-bs.appspot.com",
  messagingSenderId: "957613791825",
  appId: "1:957613791825:web:5f660a85f15213115f3670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;