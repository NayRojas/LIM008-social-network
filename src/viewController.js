import {signUp, signUpGoogle, signUpFacebook, signIn, signInGoogle, signInFacebook, editPost, signOut, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';
// --------------------------------
// FUNCIONES DE REGISTRARSE
export const signUpOnSubmit = (email, password) => {
  return signUp(email, password).then(() => location.hash = '/post');
};
export const signUpWithGoogle = () => {
  return signUpGoogle().then(() => location.hash = '/post');
};
export const signUpWithFacebook = () => {
  return signUpFacebook().then(() => location.hash = '/post');
};
// --------------------------------
// FUNCION DE INICIAR SESIÓN
export const signInOnSubmit = (email, password) => {
  return signIn(email, password).then(() => location.hash = '/post');
};
export const signInWithGoogle = () => {
  return signInGoogle().then(() => location.hash = '/post');
};
export const signInWithFacebook = () => {
  return signInFacebook().then(() => location.hash = '/post');
};
// --------------------------------
// FUNCIONES DE EDITAR POST 
// Sacar coleccion de posts de firebase
export const postContent = (postTxt, privacy) => {
  let uidUser = firebase.auth().currentUser.uid;
  return postContentSafe(postTxt, uidUser, privacy);
};
// Sacar coleccion de posts de firebase
export const postContentLs = (callback) => {
  return obtenerDatosFirebase(callback);
};

