

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