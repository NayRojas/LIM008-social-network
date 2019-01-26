// Este es el punto de entrada de tu aplicacion

// Estado inicial de pantallas
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

// Constantes para manipulación del DOM
const btnSingUp = document.getElementById('button-to-sign-up');
const btnCreateUser = document.getElementById('button-to-create-new-user');
const btnSignUpWithGoogle = document.getElementById('button-to-create-new-user-google');
const nameTxt = document.getElementById('name');
const emailTxt = document.getElementById('email');
const passwordTxt = document.getElementById('password');
const welcome = document.getElementById('welcome-new-user-screen');
const errorWeakPassword = document.getElementById('error-message-password');
const errorInvalidEmail = document.getElementById('error-messase-invalid-email');
const errorMissingFields = document.getElementById('error-missing-fields-on-registration');


// Añadir evento de cambio de vista a crear nuevo usuario
btnSingUp. addEventListener('click', () => {
  showSecondScreen();
});

// Añadir evento Creat user con correo electronico y contraseña
btnCreateUser.addEventListener('click', e => {
  e.preventDefault();
  // obtener name, email y password
  const name = nameTxt.value;
  const email = emailTxt.value;
  const password = passwordTxt.value;
  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML ='Completa tus datos para ser parte de Eva.';  
  } else {
    const auth = firebase.auth();
    // sign Up
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
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

// Añadir evento Crear usuario con Google
btnSignUpWithGoogle.addEventListener('click', e => {
  e.preventDefault();
  console.log('entro'); 
  // obtener name, email y password
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'es';
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
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
  hideFirstScreenAndWelcome();
  showWelcomeScreen();
});

// Función muestra segunda pantalla
const showSecondScreen = () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
};
// Función esconde segunda y tercera pantalla
const hideFirstScreenAndWelcome = () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'none';
};
// Función crea template literal para bienvenida una vez el usuario esta registrado
const showWelcomeScreen = () => {
  const newUserWelcome = 
        `<h1>Bienvenido</h1>
        <p>Eres nueva usuaria</p>
        `;
  window.tempNewUserWelcome += newUserWelcome;
  welcome.innerHTML = window.tempNewUserWelcome;
};


import { myFunction } from './lib/index.js';

myFunction();