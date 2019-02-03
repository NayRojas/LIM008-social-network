
let login = {
  render: async() => {
    let view = `
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
          <a href="#/post" id="button-to-log-in" type="submit">Iniciar sesión</a>
          <p class="psw right-text">¿Olvidaste tu <a href="#">contraseña?</a></p>
          <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
        </div>
        <div>
            <a href="#/post" id="button-to-log-in-with-google" type="submit" class="icon-google white-color red-back two-button btns-beside">Google</button>
            <a href="#/post" id="button-to-log-in-with-facebook" type="submit" class="icon-facebook white-color blue-back two-button btns-beside">Facebook</button>
          </div>
        
    </div>
      <div class="container">
      </div>
      <p class="center-text">¿No tienes cuenta?, <a href="#second-screen" id="sign-up-from-log-in">Registrate aquí.</a></p>
    </form>
          `;
    return view;
  },
  after_render: async() => {}
        
};

export default login;

