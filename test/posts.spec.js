import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Posts: {
      __doc__: {
        p5CSUf9BvNfsdSuylmN6: 
        {
          descripcion: 'el post fue guardado',
          likes: 0,
          state: 'Privado',
          uidUser: '0G5q03Wm2AWNgHfjTlLbJi3P8xA3',
        },
        ZoxPaIl9CFI0hUvRN1Fo: 
        {
          descripcion: 'agregando varios post',
          likes: 0,
          state: 'Publico',
          uidUser: '0G5q03Wm2AWNgHfjTlLbJi3P8xA3',
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { postContentSafe, obtenerDatosFirebase, deletePost, editPost, likePost } from '../src/services/FirebaseTools.js';

describe('postContentSafe', () => {
  it('debería ser una función', () => {
    expect(typeof postContentSafe).toBe('function');
  });
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('debería ser una función', () => {
    expect(typeof editPost).toBe('function');
  });
  it('debería ser una función', () => {
    expect(typeof likePost).toBe('function');
  });
  it('debería poder agregar un post', (done) => {
    return postContentSafe('el post fue guardado', '0G5q03Wm2AWNgHfjTlLbJi3P8xA3', 'Privado')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.descripcion === 'el post fue guardado');
          expect(result.descripcion).toBe('el post fue guardado');
          done();
        }
      ));
  });
  it('debería poder eliminar un post', (done) => {
    return deletePost('p5CSUf9BvNfsdSuylmN6')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.id === 'p5CSUf9BvNfsdSuylmN6');
          expect(result).toBe(undefined);
          done();
        }
      ));
  });
  it('debería poder editar un post', () => {
    return editPost('ZoxPaIl9CFI0hUvRN1Fo', 'Post editado :D')
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.id === 'ZoxPaIl9CFI0hUvRN1Fo');
          expect(result).toBe('Post editado :D');
          done();
        }
      ));
  });
  it('debería poder agregar un like al post', () => {
    return likePost('ZoxPaIl9CFI0hUvRN1Fo', 1)
      .then(() => obtenerDatosFirebase(
        (data) => {
          const result = data.find((post) => post.likes === 1);
          expect(result).toBe(1);
          done();
        }
      ));
  });
});