import { showCreateuser } from './temString.js';
import { showLogInScreen } from './temString.js';

// Estado inicial de pantallas
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

// Constantes para manipulación del DOM
const btnSignUpWithEmailAndPassword = document.getElementById('button-to-create-new-user'); // Botón crea nuevo usuario
const btnSignUpWithGoogle = document.getElementById('button-to-create-new-user-google'); // Botón crea nuevo usuario con google
const btnSignUpWithFacebook = document.getElementById('button-to-create-new-user-facebook');
const btnLogInWithEmailAndPassword = document.getElementById('button-to-create-new-user'); // Botón iniciar sesión con email y password
const btnLogInWithGoogle = document.getElementById('button-to-create-new-user-google'); // Botón iniciar sesión con google
const btnLogInFromSignUpForm = document.getElementById('log-in-from-create-user');// Link ir a iniciar sesión desde crear cuenta
const btSignUpFromLogInForm = document.getElementById('sign-up-from-log-in');// Link ir a crear cuenta desde iniciar sesión
const nameTxt = document.getElementById('name'); // Input toma valor del nombre 
const emailTxt = document.getElementById('email'); // Input toma valor del email 
const passwordTxt = document.getElementById('password'); // Input toma valor del password 
const welcome = document.getElementById('welcome-new-user-screen'); // Section padre de la vista bienvenida 
const logIn = document.getElementById('log-in-screen'); // Section padre de la vista iniciar sesión 
const errorWeakPassword = document.getElementById('error-message-password'); // elemento <p> para mensaje de error de password
const errorInvalidEmail = document.getElementById('error-messase-invalid-email'); // elemento <p> para mensaje de error de email
const errorMissingFields = document.getElementById('error-missing-fields-on-registration'); // elemento <p> para mensaje de error de campos vacios
const btnSignOut = document.getElementById('btn-Sign-Out');


// Añadir evento de cambio de vista a iniciar sesión
btnSingUp. addEventListener('click', () => {
  showCreateuser();
  showSecondScreen();
});
// Añadir evento de cambio de vista a iniciar sesión
btnLogIn.addEventListener('click', () => {
  hideFirstScreenAndWelcome();
  showLogInScreen();
});
// Añadir evento de cambio de vista a iniciar sesión desde la vista de crear cuenta
btnLogInFromSignUpForm.addEventListener('click', () => {
  hideFirstScreenAndWelcome();
  showLogInScreen();
});
// Añadir evento crear usuario con correo electronico y contraseña
btnSignUpWithEmailAndPassword.addEventListener('click', e => {
  e.preventDefault();
  const name = nameTxt.value;
  const email = emailTxt.value;
  const password = passwordTxt.value;
  let auth;
  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML = 'Completa tus datos para ser parte de Eva.';  
  } else {
    auth = firebase.auth();
  }
  // sign Up
  try {
    auth.createUserWithEmailAndPassword(email, password);
    hideFirstScreenAndWelcome();
    showWelcomeScreen(); 
  } catch (err) {
    let errorCode = err.code;
    let errorMessage = err.message;
    if (errorCode === 'auth/invalid-email') throw '¡Hey! Ingresa un correo electronico válido';
    if (errorCode === 'auth/email-already-in-use') throw 'Correo ya registrado :O';       
    errorInvalidEmail.innerHTML = err + '.';
    console.log(errorMessage);
  
    if (errorCode === 'auth/weak-password') throw 'Tu contraseña debe tener 6 carácteres :)';
    errorWeakPassword.innerHTML = err + '';
    console.log(errorMessage);
  }         
});
// Añadir evento crear usuario con Google
btnSignUpWithGoogle.addEventListener('click', e => {
  e.preventDefault();
  // obtener name, email y password
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    hideFirstScreenAndWelcome();
    showWelcomeScreen();
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
});
// Añadir evento crear usuario con Facebook
const provider = new firebase.auth.FacebookAuthProvider();
btnSignUpWithFacebook.addEventListener('click', e => {
  e.preventDefault();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    hideFirstScreenAndWelcome();
    showWelcomeScreen();
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
});
// Añadir evento iniciar sesión con email y contraseña
btnLogInWithEmailAndPassword.addEventListener('click', e => {
  e.preventDefault();
  // obtener email y password
  const email = emailTxt.value;
  const password = passwordTxt.value;
  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML = 'Completa tus datos para ser parte de Eva.';  
  } else {
    const auth = firebase.auth();
    // sign Up
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        errorInvalidEmail.innerHTML = '¡Hey! Ingresa un correo electronico válido';
        console.log(errorMessage);
      } else if (errorCode === 'auth/weak-password') {
        errorWeakPassword.innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
        console.log(errorMessage);
      } else {
        hideFirstScreenAndWelcome();
        showWelcomeScreen();
      }
    });
  };
});
  
// Función muestra segunda vista
const showSecondScreen = () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
};
  // Función esconde segunda y tercera vista
const hideFirstScreenAndWelcome = () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'none';
};
  
  
// Función para el slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; 
  } 
  slides[slideIndex - 1].style.display = 'block'; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  
// Añadir evento para salir de sesión
// btnSignOut.addEventListener('click', e => {
//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//     console.log('Salio de sesión')
//   });
// });
