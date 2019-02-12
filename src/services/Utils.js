const Utils = { 
  // --------------------------------
  //  Parse a url and break it into resource, id and verb
  // --------------------------------
  // parseRequestURL es un metodo
  parseRequestURL: () => {
    // Declaro una constante que emplea el metodo location.hash y le aplica el metodo slice para contar el hash a partir del caracter 1, 
    // independientemente de como se reciba para a convertirlo en lowercase
    let url = location.hash.slice(1).toLowerCase() || '/';
    // aplica metodo split para sacarle el slash(/) y almaneca en r
    let r = url.split('/');
    // como r devuelve un arreglo
    let request = {
      resource: null,
    };
    request.resource = r[1];

    return request;
  }

  // --------------------------------
  //  Simple sleep implementation
  // --------------------------------
  , sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

export default Utils;