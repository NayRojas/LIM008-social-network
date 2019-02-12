import {signUpWithGoogle, signUpWithFacebook, signInOnSubmit, signInWithGoogle, signInWithFacebook, postContent, postContentLs} from '../src/viewController.js';

describe('signUpWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signUpWithGoogle).toBe('function');
  });
});

describe('signUpWithFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof signUpWithFacebook).toBe('function');
  });
});

describe('signInOnSubmit', () => {
  it('debería ser una función', () => {
    expect(typeof signInOnSubmit).toBe('function');
  });
});

describe('signInWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithGoogle).toBe('function');
  });
});

describe('signInWithFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithFacebook).toBe('function');
  });
});

describe('postContent', () => {
  it('debería ser una función', () => {
    expect(typeof postContent).toBe('function');
  });
});

describe('postContentLs', () => {
  it('debería ser una función', () => {
    expect(typeof postContentLs).toBe('function');
  });
});
