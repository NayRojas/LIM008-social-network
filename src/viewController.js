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
  return signUpGoogle().then(() => location.hash = '/post');
};
export const signUpWithFacebook = () => {
  return signUpFacebook().then(() => location.hash = '/post');
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

