import { postContent, postContentLs, signOutFromSession , } from '../viewController.js';
import { editPost, deletePost } from '../services/FirebaseTools.js';

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
    <a id="btn-to-delete-content-${row.id}" data-id ="${row.id}" class='btn-delete'>Eliminar</a>    <a id="btn-to-edit-content-${row.id}" data-id="${row.id}" class='btn-edit'>Editar</a>
    <a id="btn-save-content-${row.id}" data-id="${row.id}" class='btn-save ocultar-post'>Guardar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>`;
  },
  after_render: () => {
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row);
        document.querySelector('#post-content-list').innerHTML += html;
      });
          const botonesEditar = document.querySelectorAll('.btn-edit');
      const botonesGuardar = document.querySelectorAll('.btn-save');
      const buttonsDelete = document.querySelectorAll('.btn-delete');
      // Evento para guardar un post
botonesGuardar.forEach((botonGuardar) => {
  const id = botonGuardar.dataset.id;
  botonGuardar.addEventListener('click', () => {
    document.getElementById(`btn-save-content-${id}`).classList.add('ocultar-post');
    document.getElementById(`btn-to-edit-content-${id}`).classList.remove('ocultar-post');
    const inputValue = document.getElementById(`input-${id}`).value;
    console.log(inputValue);
    editPost(id, inputValue);
  });
});
buttonsDelete.forEach((buttonDelete) => {
  const id = buttonDelete.dataset.id;
  buttonDelete.addEventListener('click', () => {
    document.getElementById(`btn-to-delete-content-${id}`).classList.add('btn-delete');
deletePost(id);
})

})

// Evento para editar posts
botonesEditar.forEach((boton) => {
  boton.addEventListener('click', () => {
    const id = boton.dataset.id;
    document.getElementById(`input-${id}`).classList.remove('ocultar-post');
    document.getElementById(id).classList.add('ocultar-post');
    document.getElementById(`btn-save-content-${id}`).classList.remove('ocultar-post');
    document.getElementById(`btn-to-edit-content-${id}`).classList.add('ocultar-post');
  // editPostInWall(id);
  });
});
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