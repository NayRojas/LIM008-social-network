
import initPage from './temp/initialpage.js';
import register from './temp/register.js';
import login from './temp/login.js';
import post from './temp/posts.js';
import Utils from './services/Utils.js';
import Error404 from './temp/error404.js';
// import FirebaseTools from './services/FirebaseTools.js';


const routes = {
  '/': initPage
  , '/register': register
  , '/login': login
  , '/post': post
};

export const router = async(externalResource = null) => {
  const container = document.getElementById('container');
  container.innerHTML = await initPage.render();
  await initPage.after_render();
  let request = Utils.parseRequestURL();
  let currentURL = (request.resource ? '/' + request.resource : '/');
  let currentPage = routes[currentURL] ? routes[currentURL] : Error404;
  container.innerHTML = await currentPage.render();
  await currentPage.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
