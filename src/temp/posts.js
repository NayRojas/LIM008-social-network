import { postContent, postContentLs, deletePostOnClick, signOutFromSession , } from '../viewController.js';
// import { deletePost } from '../services/FirebaseTools.js';
// import { postContentList } from '../services/FirebaseTools.js';


const toDelete = (eachPost) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
    <span class="post-content-list">
      // <span>${eachPost.title}</span>
    </span>
    <a class="mdl-list__item-secondary-action" id="btn-to-delete-content${eachPost.id}">
      <i class="material-icons">delete</i>
    </a>
  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${eachPost.id}`)
    .addEventListener('click', () => deletePostOnClick(eachPost));
  return liElement;
}




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
  applyTemplate: (row) => {
    return `<li id= "${row.id}">${row.descripcion}</li>
    <a id="btn-to-delete-content">Eliminar</a>
    <a id="btn-to-edit-content">Editar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>`;
  },
  after_render: () => {
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row);
        document.querySelector('#post-content-list').innerHTML += html;
      });
    }
    postContentLs(pintar);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      let postTxt = document.getElementById('post-content').value;
      postContent(postTxt);
    
      document.getElementById('post-content').value = '';
    });
   
  }
    // document.getElementById('btn-Sign-Out').addEventListener('click', () => {
    //   // console.log('entro al evento')
    //   signOutFromSession();
    // });
  }
// };

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
