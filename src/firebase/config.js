import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './credentials'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=() => auth.signInWithPopup(provider)

export default firebase