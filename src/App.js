import { app } from "./firebase";
import { useEffect, useState } from "react";
import { useFirebase } from "./context/Firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc, 
  getDoc as firestoreGetDoc ,
  query,
  where,
  getDocs
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const store = getFirestore(app);

function App() {
  const writeData = async () => {
    const res = await addDoc(collection(store, "cities"), {
      name: "Delhi",
      pinCode: 1234,
    });
    console.log(res);
  };

  const writeDataWithId = async () => {
    const parentDocRef = doc(store, "cities", "OnKCzfqKmbEejlCBVYqJ");
    const res = await addDoc(collection(parentDocRef, "places"), {
      name: "faridabad",
      pinCode: 121002,
    });
    console.log(res);
  };

  const fetchData = async () => {  
    const ref = doc(store, "cities", "OnKCzfqKmbEejlCBVYqJ");
    const snap = await firestoreGetDoc(ref);  
    console.log(snap);
  }


  const fetchDocs = async () => {  
    const collectionRef = collection(store,'cities');
    const q = query(collectionRef,where("name","==","Delhi"));
    const snapShot = await getDocs(q);
    snapShot.forEach(data => console.log(data.data()));
  }

  return (
    <>
      <h1>Firebase Store</h1>
      <button onClick={writeData}>Click</button>
      <button onClick={writeDataWithId}>Click Me</button>
      <button onClick={fetchData}>Click Here</button>
      <button onClick={fetchDocs}>Fetch Here</button>
    </>
  );
}

export default App;
