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
  console.log('Entro al view-controller');
  editPost(rowId, inputValue);
};
// Sacar coleccion de posts de firebase
export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};
// Sacar coleccion de posts de firebase
export const postContentLs = (callback) => {
  obtenerDatosFirebase(callback);
};
