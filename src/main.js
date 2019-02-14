// ------------------------
// CAMBIO DE HASH Y MANPULACIÓN DE PANTALLAS
// se exportan templates 
import initPage from './temp/initialpage.js';
import register from './temp/register.js';
import login from './temp/login.js';
import post from './temp/posts.js';
import Utils from './services/Utils.js';
import Error404 from './temp/error404.js';

// se definen rutas 
const routes = {
  '/': initPage
  , '/register': register
  , '/login': login
  , '/post': post
};

// renderiza el template actual segpun el hash
export const router = async(externalResource = null) => {
  const container = document.getElementById('container');
  container.innerHTML = await initPage.render();
  await initPage.afterRender();
  let request = Utils.parseRequestURL();
  let currentURL = (request.resource ? '/' + request.resource : '/');
  let currentPage = routes[currentURL] ? routes[currentURL] : Error404;
  container.innerHTML = await currentPage.render();
  await currentPage.afterRender();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
