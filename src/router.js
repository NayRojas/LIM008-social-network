/* import {initPage} from './temp/initialPage.js';
import logIn from './temp/login.js';
import register from './temp/register.js';

const changeTemplate = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return changeTmp('#/Inicio');
  } else if (hash === '#/Registrarte' || hash === '#/Iniciar-sesión') {
    return changeTmp(hash);
  } else {
    return changeTmp('#/Inicio');
  }
};

const changeTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
  case 'Inicio': 
    container.innerHTML = '';
    container.innerHTML = initPage;
    break;
  case 'Registrarte': 
    container.appendChild(register());
    console.loog('entro');
    break;
  case 'Iniciar-sesión': 
    container.appendChild(login());
  } 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
};
*/
