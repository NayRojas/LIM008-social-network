import {signUp, signUpGoogle, signUpFacebook, signIn, signInGoogle, signInFacebook, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';
// --------------------------------
// FUNCIONES DE REGISTRARSE
export const signUpOnSubmit = (email, password) => {
  return signUp(email, password).then(() => location.hash = '/post')
    .catch(function(event) {
      let errorCode = event.code;
      let errorMessage = event.message;
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/weak-password') {
        document.getElementById('error-message-password').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/email-already-in-use') { 
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Ups! Este correo esta en uso';
        throw new Error(errorMessage);
      }
    });;
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
  return signIn(email, password).then(() => location.hash = '/post').catch(function(event) {
    let errorCode = event.code;
    let errorMessage = event.message;
    if (errorCode === 'auth/invalid-email') {
      document.getElementById('error-messase-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
      throw new Error(errorMessage);
    } else if (errorCode === 'auth/wrong-password') {
      document.getElementById('error-message-password').innerHTML = 'Tu contraseña es incorrecta :(';
      throw new Error(errorMessage);
    } else if (errorCode === 'auth/user-not-found') { 
      document.getElementById('error-messase-invalid-email').innerHTML = '¡Ups! Este correo no esta registrado';
      throw new Error(errorMessage);
    }
  });
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
