// ------------------------
// PÁGINA INICIO 
let initPage = {
  render: async() => {
    let view = `
    <section class= "container-init" >
    <div class="img-ppl">
    <img src="Css/img/background3.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
    </div>
    <form class= "form-init" >
    <div class="btn-div btn-bottom">
    <a href="#/Register"  id="btn-register" class=" btn-init  btns-beside front-btn">
    ¿Nuevo usuario?
    </a>
    <a href="#/Login" id="btn-log-in" class="btn-init btns-beside front-btn">
    Iniciar sesión
    </a>
    </div>
    </form>
    </section>
    <div id="slide" >
    <img src="Css/img/jiko.jpg" alt="imagen referencial"/>
    </div>
    <div class="template-rps slid">
    <form class= "form-init" >
    <img  src="Css/img/medium-logo-copia.png" class=" logo" >
    <h1>Empodérate Hoy! </h1>
    <h2>Únete a la red social de mujeres más grande de Lationoamérica! </h2>
    <div class="btn-rps">
    <a href="#/Register"  id="btn-register" class=" btn-init  btns-beside front-btn">
    ¿Nuevo usuario?
    </a>
    <a href="#/Login" id="btn-log-in" class="btn-init btns-beside front-btn">
      Iniciar sesión
    </a>
    </div>
    </form>
    </div>
  `;
    return view;
  },
  afterRender: async() => {}
};

export default initPage;
