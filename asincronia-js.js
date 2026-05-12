// ============================================================
// EJERCICIO 1: Callbacks básicos
// ============================================================
// Una función que recibe un array y un callback.
// Simula una operación asincrónica con setTimeout de 500ms
// y luego devuelve el array con los números al cuadrado.
 
function procesarDatos(numeros, callback) {
  console.log("Procesando datos...");
 
  setTimeout(() => {
    const resultado = numeros.map((n) => n * n);
    callback(resultado);
  }, 500);
}
 
// Uso:
procesarDatos([1, 2, 3, 4, 5], (resultado) => {
  console.log("Resultado:", resultado);
  // Output: [1, 4, 9, 16, 25]
});
 