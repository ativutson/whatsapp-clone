import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "whatsapp-clone-99abe",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
