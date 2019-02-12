import { postContent, postContentLs, signOutFromSession, editPostInWall, changePrivacy} from '../viewController.js';
import { editPost, deletePost, quieroLike} from '../services/FirebaseTools.js';

let posts = {
  render: async(postInputValue) => {
    // --------------------------------
    // TEMPLATE DE MURO
    let view = 
    `<div class="container">
    <h1 class="rubik-font">Bienvenida </h1>
    <p class="rubik-font">¡Empoderate hoy!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?" class= "karla-font" ></input>
    <p id="error-empty-input" class="error-message karla-font"></p>
    <button id="privacy" class="privacy-btn rubik-font" >Público</button><br><br>
    <a id="btn-to-pots-content" class= "button rubik-font purple-back center-text">Compartir</a><br><br><br>
    <a id="btn-Sign-Out" type="button" class= "button rubik-font gray-back black center-text">Cerrar sesión</a>
    <span id="post-content-list" type="text" class= "karla-font list-style"></span>
    </div>
    `;
    return view;
  },
  applyTemplate: (row, uidUser) => {
    // TEMPLATE PARA LISTA DE PUBLICACIONES 
    return `
    <div id="${row.id}">
    ${row.state === 'Público' ? `<li id= "${row.id}" data-state= "${row.state}" class= "${row.id} post-style">${row.descripcion}</li>` : 
    (uidUser === row.uidUser ? `<li id= "${row.id}" data-state= "${row.state}" class= "${row.id} post-style">${row.descripcion}</li>` : '') }

    ${row.state === 'Público' ? `<input id="input-${row.id}" data-state= "${row.state}" type="text" value="${row.descripcion}" class="ocultar-post post-style">` : 
    (uidUser === row.uidUser ? `<input id="input-${row.id}" data-state= "${row.state}" type="text" value="${row.descripcion}" class="ocultar-post post-style">` : '') }

    ${uidUser === row.uidUser ? `<a id="btn-to-delete-content-${row.id}" data-id="${row.id}" class="btn-delete">Eliminar</a>` : '' }
    ${uidUser === row.uidUser ? `<a id="btn-to-edit-content-${row.id}" data-id="${row.id}" class='btn-edit'>Editar</a>` : '' }
    ${uidUser === row.uidUser ? `<a  id="btn-like-content-${row.id}" data-id ="${row.id}"class='fa fa-heart-o btn-like'> </a> ` : ''}
    ${uidUser === row.uidUser ? `<p id ="btn-contador-${row.id}"  data-id ="${row.id}" class='btn-count' >${row.likes}</p> ` : ''}
    <a id="btn-save-content-${row.id}" data-id="${row.id}" class='btn-save ocultar-post'>Guardar</a>
    </div>
    `;
  },
  
  after_render: () => {
    // --------------------------------
    // FUNCION PARA PINTAR TEMPLATE DE LISTA - función para recorrer template de lista de publicaciones
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      const uidUserLogueado = firebase.auth().currentUser.uid;
      // const privacyState = firebase.firestore().collection('Posts').doc('state'); // privacy
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row, uidUserLogueado);// privacy
        document.querySelector('#post-content-list').innerHTML += html;
      }); 
      // variables para botones de posts
      const botonesEditar = document.querySelectorAll('.btn-edit');
      const botonesGuardar = document.querySelectorAll('.btn-save');
      const buttonsDelete = document.querySelectorAll('.btn-delete');
      const buttonLike = document.querySelectorAll('.btn-like');
      const buttonContador = document.querySelectorAll('.btn-count');
      console.log(buttonLike);
      console.log(buttonContador);
      let counter = 0 ;
      buttonLike.forEach((btnheart) => {
        const id = btnheart.dataset.id;
        btnheart.addEventListener('click', () => {
          console.log('me diste click');
          counter += 1 ;
          buttonContador.innerHTML = counter;
          quieroLike(id, counter);
        });
      });

      // GUARDAR - Evento para guardar un post
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
      // --------------------------------
      // ELIMINAR - Evento para guardar un post
      buttonsDelete.forEach((buttonDelete) => {
        const id = buttonDelete.dataset.id;
        buttonDelete.addEventListener('click', () => {
          document.getElementById(`btn-to-delete-content-${id}`).classList.add('btn-delete');
          // const showModal = 


          deletePost(id);
          // return showModal;
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
          // editPostInWall(id);
        });
      });
    };
    
    // --------------------------------
    // PINTAR POSTS DE FB - Evento para editar posts
    postContentLs(pintar);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      // validación de input vacio
      let postTxt = document.getElementById('post-content').value;
      let privacy = document.getElementById('privacy').innerHTML;
      console.log(postTxt + privacy);
      
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
      signOutFromSession();
    });
  },  
};

export default posts;
