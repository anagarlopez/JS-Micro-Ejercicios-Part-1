//Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

// Asignar el escuchador de eventos al botón
document.getElementById('contarVocalesBtn').addEventListener('click', function() {
  // Obtener la frase ingresada por el usuario
  const frase = document.getElementById('fraseInput').value;

  // Contar la cantidad de vocales en la frase
  const conteoVocales = contarVocales(frase);

  // Mostrar el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `La frase contiene ${conteoVocales} vocales.`;
});

function contarVocales(frase) {
  // Filtrar las vocales de la frase y contarlas
  const vocales = frase.match(/[aeiou]/gi);
  return vocales ? vocales.length : 0;
}