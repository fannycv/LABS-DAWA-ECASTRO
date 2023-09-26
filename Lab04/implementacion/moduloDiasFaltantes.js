// modulo_dias_faltantes.js
function calcularDiasFaltantes(fecha) {
  const fechaActual = new Date();
  const fechaObjetivo = new Date(fecha);
  const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;

  const diasFaltantes =
    Math.floor((fechaObjetivo - fechaActual) / unDiaEnMilisegundos) + 1;

  return diasFaltantes;
}

module.exports.calcularDiasFaltantes = calcularDiasFaltantes;
