
import {signUpSubmit} from "../view-controller.js";

export default () => {
   const  formInitialPage = document.createElement('formInitialPage');
    const templateInitialPage = `
    
    <section id= "first-screen">
      <div>
        <img src="Css/img/background1.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
        <!--<img src="Css/img/background2.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
        <img src="Css/img/background3.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">-->
      </div>
      <div class="btn-div">
        <button id="btn-sign-up" class=" padding-for-btm-personalized btns-beside front-btn">¿Nuevo usuario?</button>
        <button id="button-to-log-in" class="btns-beside front-btn">Iniciar sesión</button>
      </div>
    </section>
    `;
    formInitialPage.innerHTML = templateInitialPage;
    
    // Entrada para página de Login 
    const btnSignUp = formInitialPage.querySelector('#btn-sign-up');
    // Añadir evento de cambio de vista a crear nuevo usuario
btnSingUp. addEventListener('click', () => {
    // showSecondScreen();
  });
    }
    
