// Initialize Firebase
export const register = (email, password) =>

export const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

