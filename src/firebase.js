import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6hps_34GFCN3TcPEX61UAxrevuhr26tM",
  authDomain: "facebook-clone-437ae.firebaseapp.com",
  projectId: "facebook-clone-437ae",
  storageBucket: "facebook-clone-437ae.appspot.com",
  messagingSenderId: "60799662864",
  appId: "1:60799662864:web:f4fd239f90d48708dc0395"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


//databaseURL: "https://facebook-clone-437ae.firebaseio.com",