
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);