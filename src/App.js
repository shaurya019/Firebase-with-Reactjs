import {getDatabase,ref,set} from "firebase/database"; 
import {app} from "./firebase"; 
import './App.css';

const db = getDatabase(app);

function App() {
  const  putdata = () => {
    set(ref(db,"users/shaurya"),{
      id:1,
      name:"Shaurya",
      age:22
    })
  }
  return (
    <div className="App">
      <h1>Firebase</h1>
      <button
      onClick={putdata}
      >
        Click it
      </button>
    </div>
  );
}

export default App;
