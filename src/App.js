// import {getDatabase,ref,set} from "firebase/database"; 
// import {app} from "./firebase"; 
import { useState } from "react";
import {useFirebase} from "./context/Firebase"
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// const db = getDatabase(app);

function App() {
  // const  putdata = () => {
  //   set(ref(db,"users/shaurya"),{
  //     id:1,
  //     name:"Shaurya",
  //     age:22
  //   })
  // }

  const firebase = useFirebase();
  console.log('firebase',firebase);

//   Sign In
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <div className="App">
      <h1>Firebase Sign In</h1>
      <input onChange={(e) => {
        setEmail(e.target.value)
      }} value={email} type="email" reuired placeholder="Enter email" /><label>Email</label>
      <input onChange={
        (e) => {
          setPassword(e.target.value)
        }
      } value={password} type="password" reuired placeholder="Enter password" /><label>Password</label>
      <button
      onClick={()=>firebase.signInUser(email,password)}
      >
        Submit
      </button>
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
