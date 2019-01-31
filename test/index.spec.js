// importamos la funcion que vamos a testear
import { myFunction } from "../src/lib/index";

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});


describe('functionSignUpGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof fuctionSignUpGoogle).toBe('function');
  });
});

describe('functionSignUpFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof functionSignUpFacebook).toBe('function');
  });
});

describe('functionSignUpEmail', () => {
  it('debería ser una función', () => {
    expect(typeof functionSignUpEmail).toBe('function');
  });
});
