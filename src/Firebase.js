import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyCtrUh5jeGemMjEw_iJPdcIlo0LFNhzaIc",
  authDomain: "dummy-1f6d8.firebaseapp.com",
  projectId: "dummy-1f6d8",
  storageBucket: "dummy-1f6d8.appspot.com",
  messagingSenderId: "848088678838",
  appId: "1:848088678838:web:38b7a04dcf3cf7cb920117",
};
// const config = {
//   apiKey: "AIzaSyChMJLh8qD2fdiDgx3XZ2vrVWPhJEGtX_0",
//   authDomain: "hoyiyodeegaan-da4ae.firebaseapp.com",
//   projectId: "hoyiyodeegaan-da4ae",
//   storageBucket: "hoyiyodeegaan-da4ae.appspot.com",
//   messagingSenderId: "220730682624",
//   appId: "1:220730682624:web:90f865af606887e33d57e5",
//   measurementId: "G-RCZ49BJWRQ",
// };
firebase.initializeApp(config);
export default firebase;
