
import {newUser }  from "../view-controller.js";

export default () => {
const form = document.createElement('form');
const templateForm = `
// Template to Form 
<section id="second-screen"> 
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
    </form>
</section>
`;
form.innerHTML = templateForm;

// Interacción para entrar a la página


