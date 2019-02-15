// ------------------------
// PÁGINA MURO DE PUBLICACIONES
import { postContent, postContentLs} from '../viewController.js';
import { editPost, deletePost, signOut, likePost} from '../services/FirebaseTools.js';

let posts = {
  render: async() => {
    // --------------------------------
    // TEMPLATE DE MURO
    let view =
    `<header class="posts-header">
    <div class="container">
    <h1 class="rubik-font">Bienvenida </h1>
    <p class="rubik-font">¡Empoderate hoy!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?" class= "karla-font" >
    <p id="error-empty-input" class="error-message karla-font"></p>
    <button id="privacy" class="privacy-btn rubik-font" >Público</button><br><br>
    <a id="btn-to-pots-content" class= "button rubik-font purple-back center-text">Compartir</a><br><br><br>
    <a id="btn-Sign-Out" type="text/html" class= "button rubik-font gray-back black center-text">Cerrar sesión</a>
    <section id="post-content-list" class= "karla-font list-style"></section>
    </div>
    </header>
    `;
    return view;
  },
  applyTemplate: (row, uidUser) => {
    // TEMPLATE PARA LISTA DE PUBLICACIONES 
    return `
    <div>
    ${row.state === 'Público' ? `<li id= "${row.id}" data-state= "${row.state}" class= "${row.id} post-style">${row.descripcion}</li>` : 
    (uidUser === row.uidUser ? `<li id= "${row.id}" data-state= "${row.state}" class= "${row.id} post-style">${row.descripcion}</li>` : '') }

    ${row.state === 'Público' ? `<input id="input-${row.id}" data-state= "${row.state}" type="text" value="${row.descripcion}" class="ocultar-post post-style">` : 
    (uidUser === row.uidUser ? `<input id="input-${row.id}" data-state= "${row.state}" type="text" value="${row.descripcion}" class="ocultar-post post-style">` : '') }

    ${uidUser === row.uidUser ? `<a id="btn-to-delete-content-${row.id}" data-id="${row.id}" class="btn-delete">Eliminar</a>` : '' }
    ${uidUser === row.uidUser ? `<a id="btn-to-edit-content-${row.id}" data-id="${row.id}" class="btn-edit">Editar</a>` : ''}
    <a id="btn-save-content-${row.id}" data-id="${row.id}" class='btn-save ocultar-post'>Guardar</a>

    ${row.state === 'Público' ? `<a  id="btn-like-content-${row.id}" data-id ="${row.id}" class="btn-like">Me gusta  </a>` : 
    (uidUser === row.uidUser ? `<a  id="btn-like-content-${row.id}" data-id ="${row.id}" class="btn-like">Me gusta  </a>` : '') }

    ${row.state === 'Público' ? `<a  id ="btn-contador-${row.id}"  data-id ="${row.id}" class='btn-count' >${row.likes} </a> ` : 
    (uidUser === row.uidUser ? `<a  id ="btn-contador-${row.id}"  data-id ="${row.id}" class='btn-count' >${row.likes} </a> ` : '') }
    </div>
    `;
  },
  afterRender: () => {
    // --------------------------------
    // FUNCION PARA PINTAR TEMPLATE DE LISTA - función para recorrer template de lista de publicaciones
    const painPosts = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      const uidUserLogueado = firebase.auth().currentUser.uid;
      // const privacyState = firebase.firestore().collection('Posts').doc('state'); // privacy
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row, uidUserLogueado);// privacy
        document.querySelector('#post-content-list').innerHTML += html;
      }); 
      // variables para botones de posts
      const buttonEdit = document.querySelectorAll('.btn-edit');
      const buttonSave = document.querySelectorAll('.btn-save');
      const buttonDelete = document.querySelectorAll('.btn-delete');
      const buttonLike = document.querySelectorAll('.btn-like');

      // LIKES - Evento para dar likes
      buttonLike.forEach((btnheart) => {
        const id = btnheart.dataset.id;
        const showCont = document.getElementById(`btn-contador-${id}`);
        let counter = parseInt(showCont.innerHTML);
        btnheart.addEventListener('click', () => {
          counter = counter + 1 ;
          document.getElementById(`btn-contador-${id}`).innerHTML = counter;
          likePost(id, counter);
        });
      });
      // GUARDAR - Evento para guardar un post
      buttonSave.forEach((btnSave) => {
        const id = btnSave.dataset.id;
        btnSave.addEventListener('click', () => {
          document.getElementById(`btn-save-content-${id}`).classList.add('ocultar-post');
          document.getElementById(`btn-to-edit-content-${id}`).classList.remove('ocultar-post');
          const inputValue = document.getElementById(`input-${id}`).value;
          editPost(id, inputValue);
        });
      });
      // --------------------------------
      // ELIMINAR - Evento para guardar un post
      buttonDelete.forEach((btnDelete) => {
        const id = btnDelete.dataset.id;
        btnDelete.addEventListener('click', () => {
          alert('Estás seguro que quieres eliminar tu post?');
          document.getElementById(`btn-to-delete-content-${id}`).classList.add('btn-delete');
          deletePost(id);
        });
      });
      // --------------------------------
      // EDITAR - Evento para editar posts
      buttonEdit.forEach((btnEdit) => {
        btnEdit.addEventListener('click', () => {
          const id = btnEdit.dataset.id;
          document.getElementById(`input-${id}`).classList.remove('ocultar-post');
          document.getElementById(id).classList.add('ocultar-post');
          document.getElementById(`btn-save-content-${id}`).classList.remove('ocultar-post');
          document.getElementById(`btn-to-edit-content-${id}`).classList.add('ocultar-post');
        });
      });
    };
    // --------------------------------
    // PINTAR POSTS DE FB - Evento para editar posts
    postContentLs(painPosts);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      // validación de input vacio
      let postTxt = document.getElementById('post-content').value;
      let privacy = document.getElementById('privacy').innerHTML;
      
      if (postTxt !== '') {
        postContent(postTxt, privacy);
        document.getElementById('post-content').value = '';
      } else {
        document.getElementById('btn-to-pots-content').classList.add('remove-link');
        document.getElementById('error-empty-input').innerHTML = 'Escribe una publicación';
      }
      // --------------------------------
      // PUBLICAR PRIVADO - Evento para seleccionar la privacidad del post
      document.getElementById('privacy').addEventListener('click', () => {
        let privacy = document.getElementById('privacy');
        (privacy.innerHTML === 'Público' ? privacy.innerHTML = 'Privado' : privacy.innerHTML = 'Público');
      });
    });
    document.getElementById('btn-Sign-Out').addEventListener('click', () => {
      signOut();
    });
  },  
};
export default posts;