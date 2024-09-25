const suma = require('./app');  // Asegúrate de que el archivo 'app.js' existe en el mismo directorio

test('Suma de 2 + 2 es igual a 4', () => {
  expect(suma(2, 2)).toBe(4);
});
