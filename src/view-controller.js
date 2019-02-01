

import { signIn ,signUpFacebook, signUpGoogle , addPost } from "../controller/control-firebase";




































// Este es el punto de entrada de tu aplicacion
// Estado inicial de pantallas
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

// Constantes para manipulación del DOM
const btnSingUp = document.getElementById('button-to-sign-up'); // Botón elige Soy nuevo usuario
const btnLogIn = document.getElementById('button-to-log-in'); // Botón Iniciar sesión
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
// Autenticacion con Facebook
function signUpFacebook() {
  if(!firebase.auth().currentUser){
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('Default Public Profile Fields');
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          hideFirstScreenAndWelcome();
          showWelcomeScreen();
      //     // ...
        }).catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
      //     // The email of the user's account used.
          let email = error.email;
      //     // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
        
  }
}

document.getElementById('button-to-create-new-user-facebook');



// });
// const provider = new firebase.auth.FacebookAuthProvider();
// btnSignUpWithFacebook.addEventListener('click', e => {
//   e.preventDefault();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     let token = result.credential.accessToken;
//     // The signed-in user info.
//     let user = result.user;
//     hideFirstScreenAndWelcome();
//     showWelcomeScreen();
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     // The email of the user's account used.
//     let email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     let credential = error.credential;
//     // ...
//   });
// });
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
            <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
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
                  <button id="button-to-log-in" type="submit">Iniciar sesión</button>
                  <p class="psw right-text">¿Olvidaste tu <a href="#">contraseña?</a></p>
                  <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
                </div>
                <div>
                    <button id="button-to-log-in-with-google" type="submit" class="icon-google white-color red-back two-button btns-beside">Google</button>
                    <button id="button-to-log-in-with-facebook" type="submit" class="icon-facebook white-color blue-back two-button btns-beside">Facebook</button>
                  </div>
                
            </div>
              <div class="container">
              </div>
              <p class="center-text">¿No tienes cuenta?, <a href="#second-screen" id="sign-up-from-log-in">Registrate aquí.</a></p>
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
        <button id="btn-Sign-Out">Cerrar sesión</button>
        `;
  window.tempNewUserWelcome = window.tempNewUserWelcome + newUserWelcome;
  welcome.innerHTML = window.tempNewUserWelcome;
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
import { myFunction } from './lib/index.js';

myFunction();