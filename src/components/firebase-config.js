import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth, setPersistence, browserSessionPersistence} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl0QMISBr9KBSKE5xXQPHakUXAD8DrtkA",
  authDomain: "studentlearn-f085c.firebaseapp.com",
  projectId: "studentlearn-f085c",
  storageBucket: "studentlearn-f085c.appspot.com",
  messagingSenderId: "623664715427",
  appId: "1:623664715427:web:7494f273d41fca9334d116",
  measurementId: "G-311DE76NTD"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  setPersistence(auth, browserSessionPersistence);
  export {db,auth, storage };
