import { signInOnSubmit, signInWithFacebook, signInWithGoogle } from '../viewController.js';

// TEMPLATE PARA INICIO DE SESIÓN
let login = {
  render: async() => {
    let view = `
    <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
    <form class="auth">
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
          <a  id="button-to-log-in" type="button">Iniciar sesión</a>
          <p class="psw right-text">¿Olvidaste tu <a href="#">contraseña?</a></p>
          <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
        </div>
        <div>
            <a id="button-to-log-in-with-google" type="button" class="icon-google white-color red-back two-button btns-beside">Google</button>
            <a id="button-to-log-in-with-facebook" type="button" class="icon-facebook white-color blue-back two-button btns-beside">Facebook</button>
          </div>
        
    </div>
      <p class="center-text">¿No tienes cuenta?, <a id="sign-up-from-log-in">Registrate aquí.</a></p>
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

