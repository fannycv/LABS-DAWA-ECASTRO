// script.js

function realizarOperaciones() {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

  // Realizar operaciones de la calculadora
  const resultadoSuma = numero1 + numero2;
  const resultadoResta = numero1 - numero2;
  const resultadoMultiplicacion = numero1 * numero2;
  const resultadoDivision =
    numero2 !== 0 ? numero1 / numero2 : "División por cero";

  // Mostrar resultados en los divs correspondientes
  document.getElementById("resultadoSuma").innerText = `Suma: ${resultadoSuma}`;
  document.getElementById(
    "resultadoResta"
  ).innerText = `Resta: ${resultadoResta}`;
  document.getElementById(
    "resultadoMultiplicacion"
  ).innerText = `Multiplicación: ${resultadoMultiplicacion}`;
  document.getElementById(
    "resultadoDivision"
  ).innerText = `División: ${resultadoDivision}`;
}

function procesarTexto() {
  const texto = document.getElementById("textoEntrada").value;

  // Realizar operaciones de procesamiento de texto
  const palabras = texto.split(" ");
  const subcadena = texto.substring(6, 11);
  const textoSinEspacios = texto.replace(/\s/g, "");
  const textoCapitalizado = texto.charAt(0).toUpperCase() + texto.slice(1);
  const textoMinusculas = texto.toLowerCase();
  const textoMayusculas = texto.toUpperCase();
  const cantidadCaracteres = texto.length;

  // Mostrar resultados en los divs correspondientes
  document.getElementById("palabrasDiv").innerText = `Palabras: ${palabras}`;
  document.getElementById("subcadenaDiv").innerText = `Subcadena: ${subcadena}`;
  document.getElementById(
    "textoSinEspaciosDiv"
  ).innerText = `Texto sin espacios: ${textoSinEspacios}`;
  document.getElementById(
    "textoCapitalizadoDiv"
  ).innerText = `Texto capitalizado: ${textoCapitalizado}`;
  document.getElementById(
    "textoMinusculasDiv"
  ).innerText = `Texto en minúsculas: ${textoMinusculas}`;
  document.getElementById(
    "textoMayusculasDiv"
  ).innerText = `Texto en mayúsculas: ${textoMayusculas}`;
  document.getElementById(
    "cantidadCaracteresDiv"
  ).innerText = `Cantidad de caracteres: ${cantidadCaracteres}`;
}
