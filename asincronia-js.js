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
 
 

// EJERCICIO 4: Async/Await

async function procesarConAsyncAwait(numeros) {
  try {
    const duplicados = await duplicar(numeros);
    console.log("Ejercicio 4 - Duplicados:", duplicados);
    // Output: [2, 4, 6, 8, 10]
 
    const resultado = await elevarAlCuadrado(duplicados);
    console.log("Ejercicio 4 - Al cuadrado:", resultado);
    // Output: [4, 16, 36, 64, 100]
  } catch (error) {
    console.error("Ejercicio 4 - Error:", error.message);
  }
}
 
// Uso:
procesarConAsyncAwait([1, 2, 3, 4, 5]);
 
 

// EJERCICIO 5: Manejo de errores

 
function procesarDatosConValidacion(numeros) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Verificamos si algún elemento no es un número
      const hayNoNumerico = numeros.some((n) => typeof n !== "number" || isNaN(n));
 
      if (hayNoNumerico) {
        reject(new Error("El array contiene un valor no numérico"));
        return;
      }
 
      const resultado = numeros.map((n) => n * n);
      resolve(resultado);
    }, 500);
  });
}
 
// Uso con array válido:
procesarDatosConValidacion([1, 2, 3, 4, 5])
  .then((resultado) => console.log("Ejercicio 5 - Array válido:", resultado))
  .catch((error) => console.error("Ejercicio 5 - Error:", error.message));
// Output: [1, 4, 9, 16, 25]
 
// Uso con array inválido:
procesarDatosConValidacion([1, "dos", 3])
  .then((resultado) => console.log("Ejercicio 5 - Array válido:", resultado))
  .catch((error) => console.error("Ejercicio 5 - Array inválido:", error.message));
// Output: "El array contiene un valor no numérico"
 
 

// EJERCICIO 6: Paralelismo

 
function operacionA(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n * 2);
      resolve({ operacion: "A - duplicar", resultado });
    }, 700);
  });
}
 
function operacionB(numeros) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = numeros.map((n) => n + 10);
      resolve({ operacion: "B - sumar 10", resultado });
    }, 400);
  });
}
 
// Uso con Promise.all (ambas operaciones corren en paralelo):
const numeros = [1, 2, 3, 4, 5];
 
Promise.all([operacionA(numeros), operacionB(numeros)])
  .then(([resultadoA, resultadoB]) => {
    console.log("Ejercicio 6 - Resultado A:", resultadoA);
    // Output: { operacion: 'A - duplicar', resultado: [2, 4, 6, 8, 10] }
    console.log("Ejercicio 6 - Resultado B:", resultadoB);
    // Output: { operacion: 'B - sumar 10', resultado: [11, 12, 13, 14, 15] }
  })
  .catch((error) => {
    console.error("Ejercicio 6 - Error:", error.message);
  });
 
 

// EJERCICIO 7: Extra (más complejo)

 
// Datos simulados de usuarios
const usuariosSimulados = [
  { id: 1, nombre: "Ana García",      edad: 28, activo: true  },
  { id: 2, nombre: "Carlos López",    edad: 17, activo: false },
  { id: 3, nombre: "María Martínez",  edad: 35, activo: true  },
];
 
// Función que simula la llamada a la API con delay aleatorio
function obtenerUsuariosDeAPI() {
  return new Promise((resolve, reject) => {
    // Generamos un delay aleatorio entre 200ms y 1500ms
    const delay = Math.floor(Math.random() * 1300) + 200;
    const TIEMPO_LIMITE = 1000; // 1 segundo
 
    console.log(`Ejercicio 7 - Tiempo de respuesta de la API: ${delay}ms`);
 
    setTimeout(() => {
      // Si el delay supera el límite, rechazamos la promesa
      if (delay > TIEMPO_LIMITE) {
        reject(new Error(`Timeout: la API tardó ${delay}ms (límite: ${TIEMPO_LIMITE}ms)`));
        return;
      }
 
      resolve(usuariosSimulados);
    }, delay);
  });
}
 
// Función que transforma los datos:
// - Solo usuarios activos
// - Solo mayores de edad (18+)
// - Nombre en mayúsculas
function transformarUsuarios(usuarios) {
  return usuarios
    .filter((u) => u.activo && u.edad >= 18)
    .map((u) => ({
      id: u.id,
      nombre: u.nombre.toUpperCase(),
      edad: u.edad,
    }));
}
 
// Función principal con async/await y manejo de errores
async function obtenerYTransformarUsuarios() {
  try {
    console.log("Ejercicio 7 - Consultando la API...");
 
    const usuarios = await obtenerUsuariosDeAPI();
    const usuariosTransformados = transformarUsuarios(usuarios);
 
    console.log("Ejercicio 7 - Usuarios procesados:", usuariosTransformados);
    /*
      Output esperado (si no hay timeout):
      [
        { id: 1, nombre: 'ANA GARCÍA',     edad: 28 },
        { id: 3, nombre: 'MARÍA MARTÍNEZ', edad: 35 }
      ]
      (Carlos fue filtrado: menor de edad e inactivo)
    */
  } catch (error) {
    console.error("Ejercicio 7 - Error al obtener usuarios:", error.message);
  }
}
 
// Uso:
obtenerYTransformarUsuarios();