import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({

        apiKey: "AIzaSyCL-VaesZDIyzz_SobHQdT73Zqfi9moKRY",
      
        authDomain: "gsc-chamados.firebaseapp.com",
      
        databaseURL: "https://gsc-chamados-default-rtdb.firebaseio.com",
      
        projectId: "gsc-chamados",
      
        storageBucket: "gsc-chamados.appspot.com",
      
        messagingSenderId: "874491256658",
      
        appId: "1:874491256658:web:bddd8c3486156a8089a48b"
      
      }, )
    }

export default firebase 

// apiKey:FIREBASE_API_KEY ? FIREBASE_API_KEY : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// authDomain: FIREBASE_AUTH_DOMAIN ? FIREBASE_AUTH_DOMAIN : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// projectId:FIREBASE_PROJECT_ID ? FIREBASE_PROJECT_ID : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID 