// --------------------------------
// FUNCIONES PARA CREAR SESIÓN CON FB
// con correo y contraseña
export const signUp = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(e) {
      let errorCode = e.code;
      let errorMessage = e.message;
      console.log(errorMessage);
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/weak-password') {
        document.getElementById('error-message-password').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/email-already-in-use') { 
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Ups! Este correo esta en uso';
        throw new Error(errorMessage);
      }
    });
// con Google
let googleProvider = new firebase.auth.GoogleAuthProvider();
export const signUpGoogle = () => 
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
// con Facebook
let facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signUpFacebook = () => 
  firebase.auth().signInWithPopup(facebookProvider).then(function(result)/* .then(() => location.hash = '/login')*/ {
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
// FUNCIONES PARA INICIAR SESIÓN CON FB
// iniciar sesión con correo y contraseña
export const signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(e) {
      let errorCode = e.code;
      let errorMessage = e.message;
      console.log(errorMessage);
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/wrong-password') {
        document.getElementById('error-message-password').innerHTML = 'Tu contraseña es incorrecta :(';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/user-not-found') { 
        document.getElementById('error-messase-invalid-email').innerHTML = '¡Ups! Este correo no esta registrado';
        throw new Error(errorMessage);
      }
    });
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
export const postContentSafe = (postTxt, uidUser) => 
  firebase.firestore().collection('Posts').add({
    uidUser: firebase.auth().currentUser.uid,
    descripcion: postTxt,
    likes: 0,
    state: false
  });
// actualiza la colección de fb a la ui
export const obtenerDatosFirebase = (callback) => {
  console.log(callback);
  firebase.firestore().collection('Posts')
    .onSnapshot(function(querySnapshot) {
      const posts = [];
      querySnapshot.forEach(function(doc) {
        posts.push({id: doc.id, ...doc.data()});
      });
      callback(posts);
      // console.log(posts);
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

