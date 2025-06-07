const cadenaInversa = require('./cadenaInversa');

test('invierte la cadena "hola" a "aloh"', () => {
  expect(cadenaInversa('hola')).toBe('aloh');
});

test('invierte cadena vacía a cadena vacía', () => {
  expect(cadenaInversa('')).toBe('');
});

test('invierte cadena con espacios "abc def" a "fed cba"', () => {
  expect(cadenaInversa('abc def')).toBe('fed cba');
});