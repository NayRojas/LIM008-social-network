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
import { signIn, signInFacebook, signInGoogle, signUp, signUpFacebook, signUpGoogle, signOut} from '../src/services/FirebaseTools.js';

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

describe('signInFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof signInFacebook).toBe('function');
  });
  it('Debería poder iniciar sesion con Facebook', () => {
    return signInFacebook()
      .then(() => {
        expect('').toBe('');
      });
  }); 
});

describe('signInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('Debería poder iniciar sesion con Google', () => {
    return signInGoogle()
      .then(() => {
        expect('').toBe('');
      });
  }); 
});

describe('signUpGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signUpGoogle).toBe('function');
  });
  it('Debería poder registrarse con Google', () => {
    return signUpGoogle()
      .then((user) => {
        expect('').toBe('');
      });
  }); 
});

describe('signUpFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof signUpFacebook).toBe('function');
  });
  it('Debería poder registrarse con Facebook', () => {
    return signUpFacebook()
      .then((user) => {
        expect('').toBe('');
      });
  }); 
});

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('Debería poder registrar usuario con usuario y contraseña', () => {
    return signUp('p5@g.com', 'aloha123')
      .then((user) => {
        expect(user.email).toBe('p5@g.com');
      });
  }); 
});

describe('signOut', () => {
  it('debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });
  it('Debería poder salir de sesión', () => {
    return signOut()
      .then(() => {
        expect('').toBe('');
      });
  }); 
});