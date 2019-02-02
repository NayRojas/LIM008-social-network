
// import {signUpSubmit} from "../view-controller.js";

export default () => {
  const sectionMain = document.getElementById('pantalla-principal');
  const formInitialPage = document.createElement('section');
  const templateInitialPage = `
      <div>
        <img src="Css/img/background1.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
        <!--<img src="Css/img/background2.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
        <img src="Css/img/background3.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">-->
      </div>
      <div class="btn-div">
        <button id="btn-sign-up" class=" padding-for-btm-personalized btns-beside front-btn">¿Nuevo usuario?</button>
        <button id="button-to-log-in" class="btns-beside front-btn">Iniciar sesión</button>
      </div>
    `;
  sectionMain.innerHTML = templateInitialPage;

  const btnSignUp = document.getElementById('btn-sign-up');

  btnSignUp.addEventListener('click',() => {
    location.hash = '/secondHome';
  });

}

export const secondPsge = () =>{
  const sectionMain = document.getElementById('pantalla-principal');

  const seccondPage = `
  <img src="Css/img/medium-logo.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación" class="center-img">
  <form class ="form-screen">
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
      <input id="password" type="password" placeholder="Contraseña de 6 caracteres" name="psw" >
      <p id="error-message-password" class="error-message"></p>
      <div>
        <button id="button-to-create-new-user" type="submit">Registrate ahora</button>
        <p id="error-missing-fields-on-registration" class="error-message center-text"></p>
      </div>
      <p class="center-text short-padding">Registrate con</p>
      <div class= "btn-div">
        <button id="button-to-create-new-user-google" type="button" class="icon-google white-color red-back two-button btns-beside" >Google</button>
        <button id="button-to-create-new-user-facebook" type="button" class="icon-facebook white-color blue-back two-button btns-beside" >Facebook</button>
      </div>
      
  </div>
    <p class="center-text">¿Ya tienes cuenta?, <a id="log-in-from-create-user" href="#log-in-screen">Inicia sesión.</a></p>
  </form>`;
  sectionMain.innerHTML = seccondPage;
}