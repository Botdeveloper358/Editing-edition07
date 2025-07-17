// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALqhRUFtOkmDZkOFBcyRdstPiqXG6t1PY",
  authDomain: "editing-edition7.firebaseapp.com",
  projectId: "editing-edition7",
  storageBucket: "editing-edition7.appspot.com",
  messagingSenderId: "644313512100",
  appId: "1:644313512100:web:b2879c80b5b98237e18e31",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
