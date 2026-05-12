function procesarDatos(numeros, callback) {
  console.log("Procesando datos...");
 
  setTimeout(() => {
    const resultado = numeros.map((n) => n * n);
    callback(resultado);
  }, 500);
}
 
// Uso:
procesarDatos([1, 2, 3, 4, 5], (resultado) => {
  console.log("Ejercicio 1 - Resultado:", resultado);
  // Output: [1, 4, 9, 16, 25]
});