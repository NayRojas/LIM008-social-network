import { postContent, postContentLs } from '../viewController.js';
// import { postContentList } from '../services/FirebaseTools.js';

let posts = {
  render: async(postInputValue) => {
    let view = `<h1>Bienvenido </h1>
    <p>¡Eres nueva usuaria!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
    <a id="btn-to-pots-content">Publicar</a>
    <button id="btn-Sign-Out">Cerrar sesión</button>
    <span id="post-content-list" type="text"></span>
    `;
    return view;
  },
  after_render: async() => {
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      let postTxt = document.getElementById('post-content').value;
      postContent(postTxt);
      document.getElementById('post-content').value = '';
      let test = postContentLs();
      for (let [key, value] of test) {
        console.log(key, value);
    }

    });
  }
        
};

export default posts;

// export let postsList = {
//  render: async(postInputValue) => {
//    let view = `
//    <div>
//      <span id="post-content" type="text">${postInputValue}</span>
//      <a id="btn-to-delete-content">Eliminar</a>
//      <a id="btn-to-edit-content">Editar</a>
//      <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>
//    </div>
//    `;
//    return view;
//  },
//  after_render: async() => {
//    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
//      let postTxt = document.getElementById('post-content').value;
//      postContent(postTxt);
//    });
//  }
//        
// };
