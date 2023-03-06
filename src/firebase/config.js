import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey:FIREBASE_API_KEY ? FIREBASE_API_KEY : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN ? FIREBASE_AUTH_DOMAIN : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:FIREBASE_PROJECT_ID ? FIREBASE_PROJECT_ID : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID 
    })
}

export default firebase 