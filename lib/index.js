"use strict";

var _index = require("./lib/index.js");

// Este es el punto de entrada de tu aplicacion
// Estado inicial de pantallas
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none'; // Constantes para manipulación del DOM

var btnSingUp = document.getElementById('button-to-sign-up'); // Botón elige Soy nuevo usuario

var btnLogIn = document.getElementById('button-to-log-in'); // Botón Iniciar sesión

var btnSignUpWithEmailAndPassword = document.getElementById('button-to-create-new-user'); // Botón crea nuevo usuario

var btnSignUpWithGoogle = document.getElementById('button-to-create-new-user-google'); // Botón crea nuevo usuario con google

var btnLogInWithEmailAndPassword = document.getElementById('button-to-create-new-user'); // Botón iniciar sesión con email y password

var btnLogInWithGoogle = document.getElementById('button-to-create-new-user-google'); // Botón iniciar sesión con google

var btnLogInFromSignUpForm = document.getElementById('log-in-from-create-user'); // Link ir a iniciar sesión desde crear cuenta

var btSignUpFromLogInForm = document.getElementById('sign-up-from-log-in'); // Link ir a crear cuenta desde iniciar sesión

var nameTxt = document.getElementById('name'); // Input toma valor del nombre 

var emailTxt = document.getElementById('email'); // Input toma valor del email 

var passwordTxt = document.getElementById('password'); // Input toma valor del password 

var welcome = document.getElementById('welcome-new-user-screen'); // Section padre de la vista bienvenida 

var logIn = document.getElementById('log-in-screen'); // Section padre de la vista iniciar sesión 

var errorWeakPassword = document.getElementById('error-message-password'); // elemento <p> para mensaje de error de password

var errorInvalidEmail = document.getElementById('error-messase-invalid-email'); // elemento <p> para mensaje de error de email

var errorMissingFields = document.getElementById('error-missing-fields-on-registration'); // elemento <p> para mensaje de error de campos vacios
// Añadir evento de cambio de vista a crear nuevo usuario

btnSingUp.addEventListener('click', function () {
  showSecondScreen();
}); // Añadir evento de cambio de vista a iniciar sesión

btnLogIn.addEventListener('click', function () {
  hideFirstScreenAndWelcome();
  showLogInScreen();
}); // Añadir evento de cambio de vista a iniciar sesión desde la vista de crear cuenta

btnLogInFromSignUpForm.addEventListener('click', function () {
  hideFirstScreenAndWelcome();
  showLogInScreen();
}); // Añadir evento crear usuario con correo electronico y contraseña

btnSignUpWithEmailAndPassword.addEventListener('click', function (e) {
  e.preventDefault(); // obtener name, email y password

  var name = nameTxt.value;
  var email = emailTxt.value;
  var password = passwordTxt.value;

  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML = 'Completa tus datos para ser parte de Eva.';
  } else {
    var auth = firebase.auth(); // sign Up

    auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

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
  }

  ;
}); // Añadir evento crear usuario con Google

btnSignUpWithGoogle.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('entro'); // obtener name, email y password

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'es';
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken; // The signed-in user info.

    var user = result.user; // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // The email of the user's account used.

    var email = error.email; // The firebase.auth.AuthCredential type that was used.

    var credential = error.credential; // ...
  });
  hideFirstScreenAndWelcome();
  showWelcomeScreen();
});
btnLogInWithEmailAndPassword.addEventListener('click', function (e) {
  e.preventDefault(); // obtener email y password

  var email = emailTxt.value;
  var password = passwordTxt.value;

  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML = 'Completa tus datos para ser parte de Eva.';
  } else {
    var auth = firebase.auth(); // sign Up

    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

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
  }

  ;
}); // Función crea template literal para iniciar sesión

var showLogInScreen = function showLogInScreen() {
  var tempLogIn = "<section id=\"third-screen\"> \n            <h1 class=\"center-text\">Nombre</h1>\n            <p class= \"center-text\">Este es el slogan</p>\n            <form>\n              <div class=\"container\">\n                <div>\n                <h2 class= \"center-text\" >Iniciar sesi\xF3n</h2>\n                </div>\n                <label><b>Correo electronico</b></label>\n                <input id = \"email\" type=\"email\" placeholder=\"Ingresa un correo electronico\" name=\"uname\" >\n                <p id=\"error-messase-invalid-email\" class=\"error-message\"></p>\n                <label for=\"password\"><b>Contrase\xF1a</b></label>\n                <input id=\"password\" type=\"password\" placeholder=\"Contrase\xF1a de 6 caracteres\" name=\"psw\" >\n                <p id=\"error-message-password\" class=\"error-message\"></p>\n                <div>\n                    <button id=\"button-to-log-in-with-google\" type=\"submit\">Google</button>\n                  </div>\n                <div>\n                  <button id=\"button-to-log-in\" type=\"submit\">Iniciar sesi\xF3n</button>\n                  <p id=\"error-missing-fields-on-registration\" class=\"error-message center-text\"></p>\n                </div>\n            </div>\n              <div class=\"container\" style=\"background-color:#f1f1f1\">\n                <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n                <span class=\"psw\">\xBFOlvidaste tu <a href=\"#\">contrase\xF1a?</a></span>\n              </div>\n              <p class=\"center-text\">\xBFNo tienes cuenta?, <a id=\"sign-up-from-log-in\">registrate aqu\xED.</a></p>\n            </form>\n        </section>\n            ";
  window.tempLogIn += tempLogIn;
  logIn.innerHTML = window.tempLogIn;
}; // Función muestra segunda vista


var showSecondScreen = function showSecondScreen() {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
}; // Función esconde segunda y tercera vista


var hideFirstScreenAndWelcome = function hideFirstScreenAndWelcome() {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'none';
}; // Función crea template literal para bienvenida una vez el usuario esta registrado


var showWelcomeScreen = function showWelcomeScreen() {
  var newUserWelcome = "<h1>Bienvenido</h1>\n        <p>Eres nueva usuaria</p>\n        ";
  window.tempNewUserWelcome += newUserWelcome;
  welcome.innerHTML = window.tempNewUserWelcome;
};

(0, _index.myFunction)();