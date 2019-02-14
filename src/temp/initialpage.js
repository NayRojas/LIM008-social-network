
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
    <div id="slide">
    <img src="Css/img/jiko.jpg"/>
    </div> `;
    return view;
  },
  after_render: async() => {}
};

export default initPage;
{/* <section class= "container-init" >
<div class="img-ppl container-rps">
      <img src="Css/img/background3.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
  </div>
  <div class="btn-div btn-bottom ">
    <a href="#/Register"  id="btn-register" class=" btn-init  btns-beside front-btn">
    ¿Nuevo usuario?
    </a>
    <a href="#/Login" id="btn-log-in" class="btn-init btns-beside front-btn">
    Iniciar sesión
    </a>
</div>
  </section>

 */}
