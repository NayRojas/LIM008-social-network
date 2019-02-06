import {signUp, signUpGoogle, signUpFacebook, signIn, signInGoogle, deletePost, signOut, postContentSafe, obtenerDatosFirebase} from './services/FirebaseTools.js';

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

export const deletePostOnClick = (eachNote) => 
deletePost(eachNote.id);

export const signOutFromSession = () => {
  signOut();
};

export const postContent = (postTxt) => {
  postContentSafe(postTxt);
};

export const postContentLs = (callback) => {
  obtenerDatosFirebase(callback);
};




// export const deletePostsByUid = (uid) => {
//   deletePost(uid);
// };

