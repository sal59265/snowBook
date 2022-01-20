import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import REACT-REACT_APP_API_KEY from 

const firebaseConfig = {

    apiKey: "${process.env.REACT_APP_API_KEY}",
  
    authDomain: "snowbook-3d14e.firebaseapp.com",
  
    projectId: "snowbook-3d14e",
  
    storageBucket: "snowbook-3d14e.appspot.com",
  
    messagingSenderId: "562443286241",
  
    appId: "1:562443286241:web:727b93c0dcceff8d51a9a0",
  
    measurementId: "G-CW6PBM4VW3"
  
  };
  
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
