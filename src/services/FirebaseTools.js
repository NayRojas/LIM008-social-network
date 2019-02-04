// Firebase functions
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

let facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signUpFacebook = () => 
  firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
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
  
export const postContentSafe = (postTxt) => 
  firebase.firestore().collection('Posts').add({
    descripcion: postTxt,
    state: false
  });

    
export const obtenerDatosFirebase = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      firebase.firestore().collection('Posts')
      // onSnapShot es un metodo de firebase para tomar una foto de la data
        .onSnapshot((querySnapshot) => {
          const data = [];
          // querySnapshot contiene los resultados de una consulta, en este caso de la colección a la cual de estoy haciendo onSnapShot
          querySnapshot.forEach((doc) => {
            let postData = (doc.data().descripcion);
            // rellena el array data con el id del doc consultado y si data completa 
            data.push({ id: doc.id, ...doc.data() });
          });
        // para retornarlo con un callback
        }).then((response) => { 
          resolve(response);
        }, 2000);
    });
  });
};

