import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        aloha123: {
          uidUser: 'abc',
          descripcion: 'el post fue guardado',
          likes: 0,
          state: 'Privado'
        },
        aloha124: {
          uidUser: 'bcd',
          descripcion: 'agregando varios post',
          likes: 1,
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
    return postContentSafe('el post fue guardado', 'Privado')
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
    return editPost('aloha124', 'Post editado :D')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.id === 'aloha124');
          expect(result).toBe( 'Post editado :D');
          done();
        }
      ));
  });
});