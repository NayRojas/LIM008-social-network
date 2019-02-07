import {signUp, signUpGoogle, signUpFacebook, signIn, signInGoogle,  signOut, deletePost ,postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';

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
export const signInWithGoogle = () => {
  signInGoogle().then(() => location.hash = '/post');
};

export const signOutFromSession = () => {
  signOut();
};
// export const deleteItPost =(rowId) => {
// deletePost(rowId);
// }
export const editPostInWall = (rowId, inputValue) => {
  console.log('Entro al view-controller')
  editPost(rowId, inputValue);
};
// Sacar coleccion de posts de firebase
export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};
// Sacar coleccion de posts de firebase
export const postContentLs = (callback) => {
  obtenerDatosFirebase(callback);
};




// export const deletePostsByUid = (uid) => {
//   deletePost(uid);
// };

