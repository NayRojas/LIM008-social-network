import { signUpOnSubmit, signUpWithGoogle, signUpWithFacebook, postContentLs } from '../viewController.js';

let register = {
  render: async() => {
    let view = `
    <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
    <form class="auth">
      <div class="container">
        <div class="gray-div">
          <h2 class= "center-text">Crear cuenta</h2>
        </div>
        <label class="margin-top"><b>Nombre</b></label>
        <input id = "name" class="medium-margin" type="text" placeholder="Ingresa tu nombre" name="uname" > 
        <label class="margin-top"><b>Correo electrónico</b></label>
        <input id = "email"  type="email" placeholder="Ingresa un correo electronico" name="uname" >
        <p id="error-messase-invalid-email" class="error-message"></p>
        <label for="password"><b>Contraseña</b></label>
        <input id="password" type="password" placeholder="Escribe tu contraseña" name="psw" >
        <p id="error-message-password" class="error-message"></p>
        <div>
          <a id="button-to-create-new-user" type="submit">Crear mi cuenta</a>
          <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
        </div>
        <p class="center-text short-padding">Continua con</p>
        <div class= "btn-div">
          <a  id="button-to-create-new-user-google" type="button" class="icon-google white-color red-back two-button btns-beside" >Google</a>
          <a  id="button-to-create-new-user-facebook" type="button" class="icon-facebook white-color blue-back two-button btns-beside" >Facebook</a>
        </div>
        
    </div>
      <p class="center-text">¿Ya tienes cuenta?, <a id="log-in-from-create-user" href="#log-in-screen">Inicia sesión.</a></p>
    </form>`;
    return view;
  },
  after_render: async() => {
    document.getElementById('button-to-create-new-user').addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (name === '' || email === '' || password === '') {
        document.getElementById('error-missing-fields-on-registration').innerHTML = 'Completa tus datos para ser parte de Eva';  
      } else {
        // sign Up
        signUpOnSubmit(email, password);
      }
    });
    document.getElementById('button-to-create-new-user-google').addEventListener('click', () => {
      signUpWithGoogle();
    });
    document.getElementById('button-to-create-new-user-facebook').addEventListener('click', () => {
      signUpWithFacebook();
    });
  }
};

export default register;
