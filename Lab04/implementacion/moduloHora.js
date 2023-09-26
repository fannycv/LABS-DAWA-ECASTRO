// modulo_hora.js
function obtenerHora() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const amPm = hora >= 12 ? "PM" : "AM";
  const hora12h = hora > 12 ? hora - 12 : hora;

  const horaActual = fecha.toLocaleTimeString();

  const horaFormato24 =
    fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

  const horaFormato12h = `${hora12h}:${minutos}:${segundos} ${amPm}`;

  return {
    hora,
    minutos,
    segundos,
    formato12h: `${hora > 12 ? hora - 12 : hora}:${minutos}:${segundos} ${
      hora >= 12 ? "PM" : "AM"
    }`,

    horaFormato12: horaFormato12h,
    horaActual: horaActual,
    horaFormato24: horaFormato24,
  };
}

module.exports.obtenerHora = obtenerHora;
