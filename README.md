Programación Asincrónica en JavaScript 
Trabajo práctico de la materia Desarrollo Back End correspondiente a la carrera de Desarrollo Full Stack.

¿De qué trata este proyecto?
Este repositorio contiene ejercicios progresivos sobre programación asincrónica en JavaScript. La idea es ir entendiendo cómo maneja JS las operaciones que toman tiempo (como llamadas a APIs, lectura de archivos, etc.) sin bloquear la ejecución del resto del código.
Cada ejercicio está en su propia rama y va sumando conceptos sobre el anterior, así se puede ver la evolución del código a medida que avanza el TP.

Estructura del repositorio 
RamaContenidoejercicio-1-callbacksCallbacks básicos con setTimeoutejercicio-2-promesasConversión a Promesasejercicio-3-encadenamientoEncadenamiento con .then()ejercicio-4-async-awaitReescritura con async/awaitejercicio-5-manejo-erroresValidación y manejo de erroresejercicio-6-paralelismoEjecución paralela con Promise.allejercicio-7-extraSimulación de API con timeoutmainVersión final con todos los ejercicios

Ejercicios 
Ejercicio 1 — Callbacks básicos
Se crea la función procesarDatos que recibe un array de números y un callback. Simula una operación asincrónica con setTimeout de 500ms y devuelve los números elevados al cuadrado.
Ejercicio 2 — Promesas
Se convierte la función del ejercicio anterior para que retorne una Promise en lugar de usar un callback. Más limpio y fácil de encadenar.
Ejercicio 3 — Encadenamiento de promesas
Se encadenan dos promesas usando .then(): primero se duplican los números y luego se elevan al cuadrado.
Ejercicio 4 — Async/Await
Se reescribe la lógica del ejercicio 3 usando async/await con manejo de errores mediante try/catch. Mucho más legible que el encadenamiento de .then().
Ejercicio 5 — Manejo de errores
Se agrega validación al array de entrada. Si contiene algún valor no numérico, la promesa se rechaza con un mensaje de error descriptivo.
Ejercicio 6 — Paralelismo
Se crean dos funciones asincrónicas y se ejecutan en paralelo usando Promise.all. Ambas corren al mismo tiempo y el resultado llega cuando las dos terminaron.
Ejercicio 7 — Extra (más complejo)
Se simula una API que devuelve datos de usuarios con un delay aleatorio. Si la respuesta tarda más de 1 segundo, la promesa se rechaza por timeout. Los datos recibidos se filtran y transforman antes de mostrarlos.

¿Cómo correr el proyecto? 
Requisitos:

Tener Node.js instalado

Pasos:
bash# Clonar el repositorio
git clone https://github.com/srluchopdev/back-end.git

# Entrar a la carpeta
cd back-end

# Correr el archivo principal
node asincronia-js.js
Para ver un ejercicio específico, cambiás a la rama correspondiente:
bashgit checkout ejercicio-3-encadenamiento
node asincronia-js.js

Tecnologías usadas 

JavaScript — lenguaje principal
Node.js — entorno de ejecución
Git / GitHub — control de versiones


Autor
luciano nahuel pereira — Estudiante de Desarrollo Full Stack
github.com/srluchopdev
