import {
  upperCase,
  lowerCase,
  capitalize,
} from '.';

describe('Helpers test', () => {
  it('Should uppercase a string', () => {
    const uppercased = upperCase('pokedex');
    expect(uppercased).toEqual('POKEDEX');
  });

  it('Should lowercase a string', () => {
    const lowercased = lowerCase('POKEDEX');
    expect(lowercased).toEqual('pokedex');
  });

  it('Should capitalize the first letter of a string', () => {
    const capitalized = capitalize('pokedex');
    expect(capitalized).toEqual('Pokedex');
  });
});
