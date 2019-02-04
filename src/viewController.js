import {signUp, signUpGoogle, signUpFacebook, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';

export const holaPrint = () => {
  console.log('hello');
};

export const signUpOnSubmit = (email, password) => {
  signUp(email, password).then(() => location.hash = '/post');
};

export const signUpWithGoogle = () => {
  signUpGoogle().then(() => location.hash = '/post');
};

export const signUpWithFacebook = () => {
  signUpFacebook().then(() => location.hash = '/post');
};

export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};

export const postContentLs = () => {
  return obtenerDatosFirebase();
};


