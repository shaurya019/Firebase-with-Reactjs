import React , {createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCj4ciJZizrxADWWxhNRfcjKPB9-IKoZJU",
    authDomain: "apps-5419e.firebaseapp.com",
    projectId: "apps-5419e",
    storageBucket: "apps-5419e.appspot.com",
    messagingSenderId: "970578771528",
    appId: "1:970578771528:web:3dd94e2b8794f3f9b8627d",
    measurementId: "G-PNNV6PLKYV",
    databaseURL:"https://apps-5419e-default-rtdb.firebaseio.com/",
  };

const  firebaseApp = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {


    const signInUser = (email,password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          alert("Success");
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
        }

    return <FirebaseContext.Provider value={{signInUser}}>
        {
            props.children
        }
    </FirebaseContext.Provider>
}
