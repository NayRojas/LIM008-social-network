import {signUp, signUpGoogle, signUpFacebook, signIn, signOut, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';

export const signUpOnSubmit = (email, password) => {
  signUp(email, password).then(() => location.hash = '/post');
};

export const signUpWithGoogle = () => {
  signUpGoogle().then(() => location.hash = '/post');
};

export const signUpWithFacebook = () => {
  signUpFacebook().then(() => location.hash = '/post');
};
 
export const signInOnSubmit = (email, password) => {
  signIn(email, password).then(() => location.hash = '/post');
};

export const signOutFromSession = () => {
  signOut().then(() => location.hash = '/login');
};

export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};

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


