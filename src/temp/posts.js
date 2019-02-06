import { postContent, postContentLs, signOutFromSession, editPostInWall } from '../viewController.js';
import { editPost } from '../services/FirebaseTools.js';

let posts = {
  render: async(postInputValue) => {
    let view = `<h1>Bienvenido </h1>
    <p>¡Eres nueva usuaria!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
    <a id="btn-to-pots-content">Publicar</a>
    <a id="btn-Sign-Out" type="button">Cerrar sesión</a>
    <span id="post-content-list" type="text"></span>
    `;
    return view;
  },
  applyTemplate: (row, uidUser) => {
    return `<li id= "${row.id}">${row.descripcion}</li>
    <input id="input-${row.id}" type="text" value="${row.descripcion}" class="ocultar-post">
    <a id="btn-to-edit-content-${row.id}" data-id="${row.id}" class='btn-edit'>Editar</a>
    <a id="btn-save-content-${row.id}" data-id="${row.id}" class='btn-save ocultar-post'>Guardar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>`;
  },
  after_render: () => {
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      const uidUserLogueado = firebase.auth().currentUser.uid;
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row);
        document.querySelector('#post-content-list').innerHTML += html;
      });
      const botones = document.querySelectorAll('.btn-edit')
      const botonesGuardar = document.querySelectorAll('.btn-save')

      botonesGuardar.forEach((botonGuardar) => {
        botonGuardar.addEventListener('click', () => {
          const id = botonGuardar.dataset.id;
          const inputValue = document.getElementById(`input-${id}`).value;
          console.log(inputValue);
        });
      })
      botones.forEach((boton) => {
        boton.addEventListener('click', () => {
        const id = boton.dataset.id;
        document.getElementById(`input-${id}`).classList.remove('ocultar-post');
        document.getElementById(id).classList.add('ocultar-post');
        document.getElementById(`btn-save-content-${id}`).classList.remove('ocultar-post');
        document.getElementById(`btn-to-edit-content-${id}`).classList.add('ocultar-post');
        // editPostInWall(id);
       });
      })
    
      //
    };
    postContentLs(pintar);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      let postTxt = document.getElementById('post-content').value;
      postContent(postTxt);
      document.getElementById('post-content').value = '';
    });
    document.getElementById('btn-Sign-Out').addEventListener('click', () => {
      console.log('entro al evento');
      signOutFromSession();
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

// };
