// ============================================================
// EJERCICIO 2: Promesas
// ============================================================
// Se convierte la función del ejercicio 1 para que retorne
// una Promesa en lugar de usar un callback.
 
function procesarDatos(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n * n);
      resolve(resultado);
    }, 500);
  });
}
 
// Uso:
procesarDatos([1, 2, 3, 4, 5])
  .then((resultado) => {
    console.log("Resultado:", resultado);
    // Output: [1, 4, 9, 16, 25]
  });
 