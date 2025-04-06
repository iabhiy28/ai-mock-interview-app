import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCaH8JyniXEI1OsJqR-gRvfHd8mDwPctrI",
  authDomain: "mockify-93494.firebaseapp.com",
  projectId: "mockify-93494",
  storageBucket: "mockify-93494.firebasestorage.app",
  messagingSenderId: "753630560827",
  appId: "1:753630560827:web:fb5f2105f56df159db521e",
  measurementId: "G-HM7B3VPDKQ"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);



const db = getFirestore(app);

export { db };
