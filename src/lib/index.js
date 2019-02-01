// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
// }

export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
 
export const signUpGoogle = () => 
// Firebase w/ Google
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signUpFacebook = () => 
// Firebase con Facebook
  firebase.auth().signInWithEmailAndPassword(email, password);

export const addPost = (txtNewPost) => 
  firebase.firestore().collection('posts').add({
    title: txtNewPost,
    // state: false
  });


  // () =>  firebase.firestore().collection('posts').doc(idNote).delete()

  
// export const getPosts = (returnPost) =>
// firebase.firestore().collection('posts')
//   .onSnapshot((querySnapshot) => {
//     const data = [];
//     querySnapshot.forEach((doc) => {
//       data.push({ id: doc.id, ...doc.data() })
//     });
//     returnPost(data);
//   }); 