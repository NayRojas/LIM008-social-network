import { postContent } from '../viewController.js';
let posts = {
  render: async() => {
    let view = `<h1>Bienvenido </h1>
    <p>¡Eres nueva usuaria!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
    <a id="btn-to-pots-content">Publicar</a>
    <a id="btn-to-delete-content">Eliminar</a>
    <a id="btn-to-edit-content">Editar</a>
    <a id="btn-to-like-content">Me gusta</a>
    <button id="btn-Sign-Out">Cerrar sesión</button>

    `;
    return view;
  },
  after_render: async() => {
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      let postTxt = document.getElementById('post-content').value;
      postContent(postTxt);
    });
  }
        
};

export default posts;