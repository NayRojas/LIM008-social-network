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
// FUNCIONES PARA INICIAR SESIÓN CON FB
// iniciar sesión con correo y contraseña
export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
  
// iniciar sesión con facebook
export const signInFacebook = () => 
  firebase.auth().signInWithPopup(facebookProvider)
    .catch(function(error) {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
// iniciar sesión con google
export const signInGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
  // ...
  }).catch(function(error) {
  // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      console.log(email);
    }
  });
// --------------------------------
// FUNCIONES PARA GUARDAR Y CREAR POSTS
// guarda datos en fb
export const postContentSafe = (postTxt, privacy) => 
  firebase.firestore().collection('Posts').add({
    uidUser: firebase.auth().currentUser.uid,
    descripcion: postTxt,
    likes: 0,
    state: privacy,
  });
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
  currentPost.update({
    descripcion: inputValue,
  });
};
// Función para eliminar un post desde Firebase
export const deletePost = (postId) => {
  firebase.firestore().collection('Posts').doc(postId).delete();
};
// --------------------------------
// FUNCION PARA SALIR DE SESION 
export const signOut = () => {
  firebase.auth().signOut().then(() => location.hash = '/login')
    .catch(function(error) {
      console.log(error, 'Signed Out');
    });
};
export const quieroLike = (id, counter) => {
  firebase.firestore().collection('Posts').doc(id).update({
    'likes': counter
  });
  };