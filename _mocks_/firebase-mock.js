const firestore = () => {
  return {
    collection: (nameCollection) => {
      return {
        add: (objData) => {
          return new Promise((resolve) => {
            resolve('el post fue guardado');
          });
        }
      };
    }
  };
};

const firebase = {
  firestore: firestore,
};

export default jest.fn(() => {
  return firebase;
});