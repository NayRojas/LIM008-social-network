import { signInOnSubmit, signInWithFacebook, signInWithGoogle } from '../viewController.js';

// TEMPLATE PARA INICIO DE SESIÓN
let login = {
  render: async() => {
    let view = `
    <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
    <form class="auth">
      <div class="container">
        <div>
        <h2 class= "center-text rubik-font" >Iniciar sesión</h2>
        </div>
        <label class= "rubik-font"><b>Correo electronico</b></label>
        <input id = "email" type="email" placeholder="Ingresa un correo electronico" name="uname" class= "karla-font display-inline">
        <p id="error-messase-invalid-email" class="error-message"></p>
        <label for="password" class= "rubik-font"><b>Contraseña</b></label>
        <input id="password" type="password" autocomplete="current-password" placeholder="Contraseña de 6 caracteres" name="psw" class= "display-inline karla-font">
        <p id="error-message-password" class="error-message short-padding karla-font"></p>
        <div class= "width-100">
          <a  id="button-to-log-in" type="button" class="button center-text purple-back">Iniciar sesión</a>
          <p class="psw right-text karla-font short-padding">¿Olvidaste tu<a href="#" class="link-blue">contraseña?</a></p>
          <p id="error-missing-fields-on-registration" class="error-message center-text short-padding karla-font"></p>
        </div>
        <p class="center-text short-padding karla-font medium-margin-top"> - Continúa con - </p>
        <div class= "btn-div">
            <a id="button-to-log-in-with-google" type="button" class="button center-text icon-google white red-back two-button btns-beside">Google</button>
            <a id="button-to-log-in-with-facebook" type="button" class=" center-text icon-facebook white blue-back two-button btns-beside">Facebook</button>
          </div>
        
    </div>
      <p class="center-text karla-font long-margin">¿No tienes cuenta?, <a id="sign-up-from-log-in" class="link-blue">Registrate aquí.</a></p>
    </form>
          `;
    return view;
  },
  after_render: async() => {
    // RENDERIZADO DE EVENTOS
    // Evento para inicio de sesión
    document.getElementById('button-to-log-in').addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // Validación para campos vacios antes de iniciar
      if (email === '' || password === '') {
        document.getElementById('error-missing-fields-on-registration').innerHTML = 'Completa tus datos para ingresar';  
      } else {
      // FUNCIÓN INICIO DE SESIÓN
        signInOnSubmit(email, password);
      }
    });
    // Evento para inicio de sesión con Facebook
    document.getElementById('button-to-log-in-with-facebook').addEventListener('click', () => {
      signInWithFacebook();
    });
    // Evento para inicio de sesión con Google
    document.getElementById('button-to-log-in-with-google').addEventListener('click', () => {
      signInWithGoogle();
    });
  }
};

export default login;

