function dividirPalabras(texto) {
  return texto.split(/\s+/);
}

function extraerCadena(texto, inicio, fin) {
  return texto.substring(inicio, fin);
}

function eliminarEspacios(texto) {
  return texto.replace(/\s+/g, "");
}

function capitalizar(texto) {
  return texto
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

function convertirAMinusculas(texto) {
  return texto.toLowerCase();
}

function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}

function contarCaracteres(texto) {
  return texto.length;
}

module.exports = {
  dividirPalabras,
  extraerCadena,
  eliminarEspacios,
  capitalizar,
  convertirAMinusculas,
  convertirAMayusculas,
  contarCaracteres,
};
