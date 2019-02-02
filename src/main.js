// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import iniPageTemplate from './templates/initialpage.js'
import {secondPsge} from './templates/initialpage.js'

const firebaseInit = () => {
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

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    iniPageTemplate();
  } else if (hash === '#/secondHome') {
    secondPsge();
  } else {
    return viewTmp('#/different');  
  }
}
 
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const container = document.getElementById("container")
  //container.innerHTML = objTemp[router];
}

const doInit = () => {
  firebaseInit();
  iniPageTemplate();
};


window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)

