// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests
import { signIn } from '../src/services/FirebaseTools.js';

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('Debería poder iniciar sesion', () => {
    return signIn('p5@g.com', 'aloha123')
      .then((user) => {
        expect(user.email).toBe('p5@g.com');
      });
  }); 
});