// Este es el punto de entrada de tu aplicacion

// Estado inicial de pantallas
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

// Constantes para manipulación del DOM
const btnSingUp = document.getElementById('button-to-sign-up'); // Botón elige Soy nuevo usuario
const btnLogIn = document.getElementById('button-to-log-in'); // Botón Iniciar sesión
const btnSignUpWithEmailAndPassword = document.getElementById('button-to-create-new-user'); // Botón crea nuevo usuario
const btnSignUpWithGoogle = document.getElementById('button-to-create-new-user-google'); // Botón crea nuevo usuario con google
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


// Añadir evento de cambio de vista a crear nuevo usuario
btnSingUp. addEventListener('click', () => {
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
  // obtener name, email y password
  const name = nameTxt.value;
  const email = emailTxt.value;
  const password = passwordTxt.value;
  if (name === '' || email === '' || password === '') {
    console.log('entro');
    errorMissingFields.innerHTML = 'Completa tus datos para ser parte de Eva.';  
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

// Añadir evento crear usuario con Google
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
// Función crea template literal para iniciar sesión
const showLogInScreen = () => {
  const tempLogIn = 
            `<section id="third-screen"> 
            <h1 class="center-text">Nombre</h1>
            <p class= "center-text">Este es el slogan</p>
            <form>
              <div class="container">
                <div>
                <h2 class= "center-text" >Iniciar sesión</h2>
                </div>
                <label><b>Correo electronico</b></label>
                <input id = "email" type="email" placeholder="Ingresa un correo electronico" name="uname" >
                <p id="error-messase-invalid-email" class="error-message"></p>
                <label for="password"><b>Contraseña</b></label>
                <input id="password" type="password" placeholder="Contraseña de 6 caracteres" name="psw" >
                <p id="error-message-password" class="error-message"></p>
                <div>
                    <button id="button-to-log-in-with-google" type="submit">Google</button>
                  </div>
                <div>
                  <button id="button-to-log-in" type="submit">Iniciar sesión</button>
                  <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
                </div>
            </div>
              <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">¿Olvidaste tu <a href="#">contraseña?</a></span>
              </div>
              <p class="center-text">¿No tienes cuenta?, <a id="sign-up-from-log-in">registrate aquí.</a></p>
            </form>
        </section>
            `;
  window.tempLogIn += tempLogIn;
  logIn.innerHTML = window.tempLogIn;
};
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