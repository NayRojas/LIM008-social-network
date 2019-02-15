// --------------------------------
// FUNCIONES PARA CREAR SESIÓN CON FB
// con correo y contraseña
export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
// con Google
export const signUpGoogle = () => {
  let googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
    });
};
// con Facebook
export const signUpFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
  });
};
// --------------------------------
// FUNCIONES PARA INICIAR SESIÓN 
// iniciar sesión con correo y contraseña
export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
// iniciar sesión con facebook
export const signInFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebookProvider);
};
// iniciar sesión con google
export const signInGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};
// --------------------------------
// FUNCIONES PARA GUARDAR Y CREAR POSTS
// guarda datos en fb
export const postContentSafe = (postTxt, uidUser, privacy) => {
  return firebase.firestore().collection('Posts').add({
    uidUser: uidUser,
    descripcion: postTxt,
    likes: 0,
    state: privacy,
  });
};
// actualiza la colección de fb a la ui
export const obtenerDatosFirebase = (callback) => {
  firebase.firestore().collection('Posts')
    .onSnapshot(function(querySnapshot) {
      const posts = [];
      querySnapshot.forEach(function(doc) {
        posts.push({id: doc.id, ...doc.data()});
      });
      callback(posts);
    });
};
// Función para editar un post 
export const editPost = (postId, inputValue) => {
  let currentPost = firebase.firestore().collection('Posts').doc(postId);
  return currentPost.update({
    descripcion: inputValue,
  });
};
// Función para eliminar un post desde Firebase
export const deletePost = (postId) => {
  return firebase.firestore().collection('Posts').doc(postId).delete();
};
// Funcion para dar like
export const likePost = (id, counter) => {
  return firebase.firestore().collection('Posts').doc(id).update({
    'likes': counter
  });
}; 
// --------------------------------
// FUNCION PARA SALIR DE SESION 
export const signOut = () => {
  return firebase.auth().signOut().then(() => location.hash = '/login');
};