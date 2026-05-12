function procesarDatosCallback(numeros, callback) {
  console.log("Procesando datos...");
 
  setTimeout(() => {
    const resultado = numeros.map((n) => n * n);
    callback(resultado);
  }, 500);
}
 
// Uso:
procesarDatosCallback([1, 2, 3, 4, 5], (resultado) => {
  console.log("Ejercicio 1 - Resultado:", resultado);
  // Output: [1, 4, 9, 16, 25]
});

//evolucion del ejercicio 1

function procesarDatosPromesa(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n * n);
      resolve(resultado);
    }, 500);
  });
}
 
// Uso:
procesarDatosPromesa([1, 2, 3, 4, 5])
  .then((resultado) => {
    console.log("Ejercicio 2 - Resultado:", resultado);
    // Output: [1, 4, 9, 16, 25]
  });
  