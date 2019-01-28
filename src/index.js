// Este es el punto de entrada de tu aplicacion
document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

const btnSingUp = document.getElementById('button-to-sign-up');
const btnCreateUser = document.getElementById('button-to-create-new-user');
const nameTxt = document.getElementById('name');
const emailTxt = document.getElementById('email');
const passwordTxt = document.getElementById('password');

// Añadir evento de cambio de vista a crear nuevo usuario
btnSingUp. addEventListener('click', () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
});

// Añadir evento SignUp
btnCreateUser.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('second-screen').style.display = 'block';
  document.getElementById('first-screen').style.display = 'none';
  // obtener name, email y password
  // const nameForSignUp = name.value;
  const email = emailTxt.value;
  const password = passwordTxt.value;
  const auth = firebase.auth();
  // sign Up
  auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
});

// Autenticación con Facebook

const faceProvider = new firebase.auth.FacebookAuthProvider();

// Log In variables
const btnFacebook = document.getElementById('btn-facebook');


firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


// Redireccionamiento
firebase.auth().signInWithRedirect(provider);


// Add Input event





// import { myFunction } from './lib/index.js';

// myFunction();
