// import {getDatabase,ref,set} from "firebase/database"; 
// import {app} from "./firebase"; 
import { useEffect, useState } from "react";
import {useFirebase} from "./context/Firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// const db = getDatabase(app);

function App() {
  const auth = getAuth();
  const [user,setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user)
        setUser(user);
      } else {
        setUser(null);
      }
    })
  },[]);

  if(user===null){
    return <h1>No User</h1>
  }

  return <>
  <h1>Hello User {user.email}</h1>
  <button onClick={() => signOut(auth)}>LogOut</button></>
  // const  putdata = () => {
  //   set(ref(db,"users/shaurya"),{
  //     id:1,
  //     name:"Shaurya",
  //     age:22
  //   })
  // }

  // const provider = new GoogleAuthProvider();

  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     alert("Success");
  //   console.log(result)
  //   }).catch((error) => {
  //     alert("Success");
  //     console.log(error)
  //   });
  // const firebase = useFirebase();
  // console.log('firebase',firebase);

//   Google Sign In
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  return (
    <div className="App">
      {/* <h1>Firebase Google Sign In</h1> */}
      {/* <input onChange={(e) => {
        setEmail(e.target.value)
      }} value={email} type="email" reuired placeholder="Enter email" /><label>Email</label>
      <input onChange={
        (e) => {
          setPassword(e.target.value)
        }
      } value={password} type="password" reuired placeholder="Enter password" /><label>Password</label> */}
      {/* <button
      onClick={()=>signInWithPopup(auth,provider)}
      >
        Google Sign In
      </button> */}
    </div>
  );



// Sign up
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');

// const auth = getAuth();
// const createUser = () => {
//   signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//   alert("Success");
//   console.log(userCredential);
// })
// .catch((error) => {
//   alert("Error");
//   console.log(error.value);
// });
// }
// return (
//   <div className="App">
//     <h1>Firebase Auth</h1>
//     <input onChange={(e) => {
//       setEmail(e.target.value)
//     }} value={email} type="email" reuired placeholder="Enter email" /><label>Email</label>
//     <input onChange={
//       (e) => {
//         setPassword(e.target.value)
//       }
//     } value={password} type="password" reuired placeholder="Enter password" /><label>Password</label>
//     <button
//     onClick={createUser}
//     >
//       Submit
//     </button>
//   </div>
// );
}

export default App;
