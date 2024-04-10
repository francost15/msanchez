import { getSaludo } from "../../src/base-pruebas/02-template-string";
describe('Pruebas en el archivo 02-template-strings.js', () => {
  test('getSaludo debe de retornar Hola Fernando', () => {
    const nombre = 'Fernando';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);
  });

  // getSaludo debe de retornar Hola Carlos si no hay argumento nombre
  test('getSaludo debe de retornar Hola Carlos si no hay argumento nombre', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos');
  });
});