import {signUp, signUpGoogle, signUpFacebook, postContentSafe} from './services/FirebaseTools.js';
// import {router} from './main.js';

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
