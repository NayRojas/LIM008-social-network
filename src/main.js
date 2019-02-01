// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const initFirebase = () => {
// Initialize Firebase
  const config = {
    apiKey: 'AIzaSyAZ1JdD_Y4uI21Y5cL2c0PNDLOi1xQC2V0',
    authDomain: 'social-network1-b2e89.firebaseapp.com',
    databaseURL: 'https://social-network1-b2e89.firebaseio.com',
    projectId: 'social-network1-b2e89',
    storageBucket: 'social-network1-b2e89.appspot.com',
    messagingSenderId: '767198954108'
  };
  firebase.initializeApp(config);
};