// ------------------------
// PÁGINA CREACIÓN DE CUENTA
import { signUpOnSubmit, signUpWithGoogle, signUpWithFacebook } from '../viewController.js';

let register = {
  render: async() => {
    let view = `
    <section class= "template-register rps-design-form" >
    <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
    <form class="auth">
    <div class="container">
    <div class="gray-div">
    <h2 class= "center-text rubik-font">Crear cuenta</h2>
    </div>
    <label class="margin-top rubik-font"><b>Nombre</b></label>
    <input id = "name" class="display-inline medium-margin karla-font" type="text" placeholder="Ingresa tu nombre" name="uname"> 
    <label class="margin-top rubik-font"><b>Correo electrónico</b></label>
    <input id = "email"  type="email" placeholder="Ingresa un correo electronico" name="uname" class = "karla-font display-inline">
    <p id="error-messase-invalid-email" class="error-message karla-font"></p>
    <label for="password" class= "rubik-font"><b>Contraseña</b></label>
    <input id="password" type="password" placeholder="Escribe tu contraseña" name="psw" class = "karla-font display-inline">
    <p id="error-message-password" class="error-message short-padding karla-font"></p>
    <div class= "width-100">
    <a id="button-to-create-new-user" type="text/html" class= "button center-text purple-back">Crear mi cuenta</a>
    <p id="error-missing-fields-on-registration" class="error-message center-text short-padding karla-font"></p>
    </div>
    <p class="center-text short-padding karla-font"> - Continúa con - </p>
    <div class= "btn-div">
    <a  id="button-to-create-new-user-google" type="text/html" class="btn-short-padding button center-text icon-google white red-back two-button btns-beside" >Google</a>
    <a  id="button-to-create-new-user-facebook" type="text/html" class="btn-short-padding button center-text icon-facebook white blue-back two-button btns-beside" >Facebook</a>
    </div>
    </div>
    <p class="center-text karla-font short-margin long-margin">¿Ya tienes cuenta?, <a id="log-in-from-create-user" href="#log-in-screen"  class="link-blue">Inicia sesión.</a></p>
    </form>
    </section>`;
    return view;
  },
  afterRender: async() => {
    document.getElementById('button-to-create-new-user').addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (name === '' || email === '' || password === '') {
        document.getElementById('error-missing-fields-on-registration').innerHTML = 'Completa tus datos para ser parte de Eva';  
      } else {
        // --------------------------------
        // FUNCIONES CREACIÓN DE CUENTA
        // sign Up con usuario y contraseña
        signUpOnSubmit(email, password);
      }
    });
    // sign Up con Google
    document.getElementById('button-to-create-new-user-google').addEventListener('click', () => {
      signUpWithGoogle();
    });
    // sign Up con Facebook
    document.getElementById('button-to-create-new-user-facebook').addEventListener('click', () => {
      signUpWithFacebook();
    });
  }
};

export default register;
