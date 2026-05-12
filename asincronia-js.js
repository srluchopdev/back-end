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
 
 

// EJERCICIO 2: Promesas

 
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
 
 

// EJERCICIO 3: Encadenamiento de promesas

 
function duplicar(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n * 2);
      resolve(resultado);
    }, 500);
  });
}
 
function elevarAlCuadrado(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n * n);
      resolve(resultado);
    }, 500);
  });
}
 
// Uso (encadenamiento):
duplicar([1, 2, 3, 4, 5])
  .then((duplicados) => {
    console.log("Ejercicio 3 - Duplicados:", duplicados);
    // Output: [2, 4, 6, 8, 10]
    return elevarAlCuadrado(duplicados);
  })
  .then((resultado) => {
    console.log("Ejercicio 3 - Al cuadrado:", resultado);
    // Output: [4, 16, 36, 64, 100]
  });
 