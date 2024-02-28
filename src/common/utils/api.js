import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpCppIpVkRzzTixlL-RFwjMvtoAEioqek",
  authDomain: "stega-72d53.firebaseapp.com",
  projectId: "stega-72d53",
  storageBucket: "stega-72d53.appspot.com",
  messagingSenderId: "631804665373",
  appId: "1:631804665373:web:1298b7dd7171b1110170f4",
  measurementId: "G-7GN5Z3DHZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export function loginFunc(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      //   const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      console.log(error);
      // ...
    });
}
