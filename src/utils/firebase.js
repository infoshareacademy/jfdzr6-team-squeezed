import { firebaseConfig } from "./config"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


//init firebase app
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

//init services
export const db = getFirestore(app);