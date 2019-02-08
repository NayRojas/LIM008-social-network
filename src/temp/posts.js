import { postContent, postContentLs, signOutFromSession, editPostInWall, postConfigPrivacy } from '../viewController.js';
import { deletePost } from '../services/FirebaseTools.js';

let posts = {
  render: async(postInputValue) => {
    // --------------------------------
    // TEMPLATE DE MURO
    let view = `<h1>Bienvenido </h1>
    <p>¡Eres nueva usuaria!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
    <p id="error-empty-input" class="error-message"></p>
    <a id="btn-to-pots-content">Publicar para todos</a><br><br><br>
    <a id="btn-to-pots-content-for-me">Publicar para mi</a><br><br>
    <a id="btn-Sign-Out" type="button">Cerrar sesión</a>
    <span id="post-content-list" type="text"></span>
    `;
    return view;
  },
  applyTemplate: (row, uidUser) => {
    console.log(row.uidUser, uidUser, row.state);
    // ${row.state === 'privado'}
    // --------------------------------
    // TEMPLATE PARA LISTA DE PUBLICACIONES 
    return `
    <li id= "${row.id}" data-state= "${row.state}" class= "${row.id}">${row.descripcion}</li> 
    <input id="input-${row.id}" type="text" value="${row.descripcion}" class="ocultar-post">
    ${uidUser === row.uidUser ? `<a id="btn-to-delete-content-${row.id}" data-id="${row.id}" class="btn-delete">Eliminar</a>` : '' }
    ${uidUser === row.uidUser ? `<a id="btn-to-edit-content-${row.id}" data-id="${row.id}" class="btn-edit">Editar</a>` : '' }
    <a id="btn-save-content-${row.id}" data-id="${row.id}" class='btn-save ocultar-post'>Guardar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>`;
  },
  
  after_render: () => {
    // --------------------------------
    // FUNCION PARA PINTAR TEMPLATE DE LISTA - función para recorrer template de lista de publicaciones
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      const uidUserLogueado = firebase.auth().currentUser.uid;
      const privcyState = firebase.firestore().collection('Posts').doc('state'); // privacy
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row, uidUserLogueado, privcyState);// privacy
        document.querySelector('#post-content-list').innerHTML += html;
      }); 
      // variables para botones de posts
      const botonesEditar = document.querySelectorAll('.btn-edit');
      const botonesGuardar = document.querySelectorAll('.btn-save');
      const buttonsDelete = document.querySelectorAll('.btn-delete');
      const buttonPrivacyPost = document.getElementById('btn-to-pots-content-for-me');
      // GUARDAR - Evento para guardar un post
      botonesGuardar.forEach((botonGuardar) => {
        const id = botonGuardar.dataset.id;
        botonGuardar.addEventListener('click', () => {
          document.getElementById(`btn-save-content-${id}`).classList.add('ocultar-post');
          document.getElementById(`btn-to-edit-content-${id}`).classList.remove('ocultar-post');
          const inputValue = document.getElementById(`input-${id}`).value;
          console.log(inputValue);
          editPostInWall(id, inputValue);
        });
      });
      // --------------------------------
      // ELIMINAR - Evento para guardar un post
      buttonsDelete.forEach((buttonDelete) => {
        const id = buttonDelete.dataset.id;
        buttonDelete.addEventListener('click', () => {
          document.getElementById(`btn-to-delete-content-${id}`).classList.add('btn-delete');
          deletePost(id);
        });
      });
      // --------------------------------
      // EDITAR - Evento para editar posts
      botonesEditar.forEach((boton) => {
        boton.addEventListener('click', () => {
          const id = boton.dataset.id;
          document.getElementById(`input-${id}`).classList.remove('ocultar-post');
          document.getElementById(id).classList.add('ocultar-post');
          document.getElementById(`btn-save-content-${id}`).classList.remove('ocultar-post');
          document.getElementById(`btn-to-edit-content-${id}`).classList.add('ocultar-post');
        });
      });
      // --------------------------------
      // PUBLICAR PRIVADO - Evento para publicar contenido solo para el usuario del post
      buttonPrivacyPost.addEventListener('click', (boton) => {   
        console.log('entro a pri');
        const id = boton.dataset.id;
        console.log(id);
        postConfigPrivacy(id);
      });
    };
    // --------------------------------
    // PINTAR POSTS DE FB - Evento para editar posts
    postContentLs(pintar);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      // validación de input vacio
      let postTxt = document.getElementById('post-content').value;
      if (postTxt !== '') {
        postContent(postTxt);
        document.getElementById('post-content').value = '';
      } else {
        document.getElementById('btn-to-pots-content').classList.add('remove-link');
        document.getElementById('error-empty-input').innerHTML = 'Escribe una publicación';
      }
    });
    document.getElementById('btn-Sign-Out').addEventListener('click', () => {
      signOutFromSession();
    });
    
  },
};

export default posts;

// <div id="miModal" class="modal">
//  <div class="flex" id="flex">
// <div class="modal-header flex">
// <h2>MENSAJE</h2>
// <p>¿Estás seguro que deseas eliminar?</p>
// <a id="btn-delete-sure" type="button" > Aceptar</a>
// </div>
//  </div>
//     </div>

// Evento para modal al eliminar un post 
// buttonDelete.forEach((btn) => {
// btn.addEventListener('click', () => {
//   console.log('está entrando ');
// // const id = btn.dataset.id;
// let modalDelete = ` 
// <h1>¿Estás seguro que deseas eliminar? </h1>
//     <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
//     <a id="btn-to-pots-content">Publicar</a>
//     <a id="btn-Sign-Out" type="button">Cerrar sesión</a>
//     <span id="post-content-list" type="text"></span>
//     `;

// });
// });
