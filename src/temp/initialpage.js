
let initPage = {
  render: async() => {
    let view = `
    <div>
      <img src="Css/img/background1.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
      <!--<img src="Css/img/background2.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
      <img src="Css/img/background3.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">-->
      </div>
      <div class="btn-div">
        <a href="#/Register"  id="btn-register" class=" padding-for-btm-personalized btns-beside front-btn">
        ¿Nuevo usuario?
        </a>
        <a href="#/Login" id="btn-log-in" class="btns-beside front-btn">
         Iniciar sesión
        </a>
    </div>
  `;
    return view;
  },
  after_render: async() => {}
        
};

export default initPage;


