
let posts = {
  render: async() => {
    let view = `<h1>Bienvenido</h1>
    <p>Eres nueva usuaria, </p>
    <button id="btn-Sign-Out">Cerrar sesión</button>
    `;
    return view;
  },
  after_render: async() => {}
        
};

export default posts;