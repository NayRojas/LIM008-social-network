import {signIn} from './services/FirebaseTools.js'
import {router} from './services/FirebaseTools.js'


export const signInOnSubmit = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    /*.then(() => router('/posts'))
    .catch(() => {

    });*/
};