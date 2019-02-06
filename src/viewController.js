import {signUp, signUpGoogle, signUpFacebook, signIn, signInFacebook, signOut, postContentSafe, obtenerDatosFirebase, editPost} from './services/FirebaseTools.js';
// Funciones de registrarse 
export const signUpOnSubmit = (email, password) => {
  signUp(email, password).then(() => location.hash = '/post');
};
export const signUpWithGoogle = () => {
  signUpGoogle().then(() => location.hash = '/post');
};
export const signUpWithFacebook = () => {
  signUpFacebook().then(() => location.hash = '/post');
};

// Funciones de inicio de sesión
export const signInOnSubmit = (email, password) => {
  signIn(email, password).then(() => location.hash = '/post');
};
export const signInWithFacebook = () => {
  signInFacebook();
  console.log('entro');
};

// Funciones de salir de sesión
export const signOutFromSession = () => {
  signOut();
};

// Funciones del muro de publicaciones
// editar
export const editPostInWall = (rowId) => {
  console.log('Entro al view-controller')
  editPost(rowId);
};
// Sacar coleccion de posts de firebase
export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};
// Sacar coleccion de posts de firebase
export const postContentLs = (callback) => {
  obtenerDatosFirebase(callback);
};
export const deletePostsByUid = (uid) => {
  deletePost(uid);
};

/* export const postContentLs = (postContentAll) => {
  let postsList = (postContentAll) => {
    let view = `
    <div>
    <span id="post-content" type="text">${postContentAll}</span>
    <a id="btn-to-delete-content">Eliminar</a>
    <a id="btn-to-edit-content">Editar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>
    </div>
    `;
    document.getElementById('post-content-list').innerHTML = view;
  };
  return*/


