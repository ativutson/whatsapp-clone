import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCE8hujZBoT0R-n4OmUKRNM3zJXO-Vdr_U",
    authDomain: "whatsapp-clone-99abe.firebaseapp.com",
    projectId: "whatsapp-clone-99abe",
    storageBucket: "whatsapp-clone-99abe.appspot.com",
    messagingSenderId: "307613978291",
    appId: "1:307613978291:web:6e509dfaac6150e9cbeac6",
    measurementId: "G-8GHQ5D8V9Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;