// ------------------------
// PÁGINA ERROR 404
let Error404 = {
  render: async() => {
    let view = `
      <section class="error-404">
      <h1> 404 Error </h1>
      </section>
      `;
    return view;
  }
  , 
  afterRender: async() => {
  }
};
export default Error404;