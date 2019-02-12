import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        aloha123: {
          descripcion: 'el post fue guardado',
          state: 'Privado'
        },
        aloha124: {
          descripcion: 'agregando varios post',
          state: 'Publico'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { postContentSafe, obtenerDatosFirebase, deletePost, editPost } from '../src/services/FirebaseTools.js';

describe('postContentSafe', () => {
  it('debería poder agregar un post', () => {
    return postContentSafe('el post fue guardado')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.descripcion === 'el post fue guardado' || post.state === 'Privado');
          expect(result.descripcion).toBe('el post fue guardado');
          expect(result.state).toBe('Privado');
          done();
        }
      ));
  });
  it('debería poder eliminar un post', (done) => {
    return deletePost('aloha124')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.id === 'aloha124');
          expect(result).toBe(undefined);
          done();
        }
      ));
  });
  it('debería poder editar un post', () => {
    const postToEdit = 'Editando un post';
    const editedPost = 'Post editado :D';
    return editPost('aloha124', postToEdit)
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.id === 'aloha124');
          expect(result).toBe(editedPost);
          done();
        }
      ));
  });
});