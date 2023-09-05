// Imprime un mensaje de bienvenida
console.log("¡Bienvenido al convertidor de monedas!");

// Imprime una explicación sobre la conversión
console.log(
  "Este programa convierte dólares a euros utilizando una tasa de cambio fija."
);

// Importa la biblioteca readline
const readline = require("readline");

// Crear una interfaz de lectura desde la entrada estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Capturar la cantidad en dólares
rl.question("Ingresa la cantidad en dólares: ", function (dollars) {
  // Definir la tasa de cambio fija
  const tasaDeCambio = 0.85;

  // Calcular la conversión
  const euros = dollars * tasaDeCambio;

  // Mostrar el resultado de la conversión
  console.log(
    `${dollars} dólares son aproximadamente ${euros.toFixed(2)} euros.`
  );

  // Cerrar la interfaz de lectura
  rl.close();
});
