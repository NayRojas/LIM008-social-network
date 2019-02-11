import {signUp, signUpGoogle, signUpFacebook, signIn, signInGoogle, signInFacebook, editPost, signOut, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';
// --------------------------------
// FUNCIONES DE REGISTRARSE
export const signUpOnSubmit = (email, password) => {
  signUp(email, password).then(() => location.hash = '/post');
};
export const signUpWithGoogle = () => {
  signUpGoogle().then(() => location.hash = '/post');
};
export const signUpWithFacebook = () => {
  signUpFacebook().then(() => location.hash = '/post');
};
// --------------------------------
// FUNCION DE INICIAR SESIÓN
export const signInOnSubmit = (email, password) => {
  signIn(email, password).then(() => location.hash = '/post');
};
export const signInWithGoogle = () => {
  signInGoogle().then(() => location.hash = '/post');
};
export const signInWithFacebook = () => {
  signInFacebook().then(() => location.hash = '/post');
  console.log('entro');
};
// --------------------------------
// FUNCION DE CERRAR SESIÓN
export const signOutFromSession = () => {
  signOut();
};
// --------------------------------
// FUNCIONES DE EDITAR POST 
export const editPostInWall = (rowId, inputValue) => {
  editPost(rowId, inputValue);
};
// Sacar coleccion de posts de firebase
export const postContent = (postTxt, privacy) => {
  postContentSafe(postTxt, privacy);
};
// Sacar coleccion de posts de firebase
export const postContentLs = (callback) => {
  obtenerDatosFirebase(callback);
};
// Cambia la seleccion de privacidad del post a compartir 
export const changePrivacy = () => {
  let privacy = document.getElementById('privacy');
  if (privacy.innerHTML === 'Público') {
    privacy.innerHTML = 'Privado';
  } else {
    privacy.innerHTML = 'Público'; 
  }
};
