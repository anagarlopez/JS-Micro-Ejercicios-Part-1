//Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

// Asignar el escuchador de eventos al botón
document.getElementById('contarVocalesBtn').addEventListener('click', function() {
  // Obtener la frase ingresada por el usuario
  const frase = document.getElementById('fraseInput').value;

  // Contar la cantidad de cada vocal en la frase
  const conteoVocales = contarVocales(frase);

  // Mostrar el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = 'Conteo de vocales:<br>';
  for (let vocal in conteoVocales) {
    resultadoElement.innerHTML += `${vocal}: ${conteoVocales[vocal]}<br>`;
  }
});

function contarVocales(frase) {
  // Inicializar un objeto para almacenar el conteo de cada vocal
  const conteoVocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

  // Iterar sobre cada caracter de la frase
  for (let char of frase.toLowerCase()) {
    // Verificar si el caracter es una vocal
    if ('aeiou'.includes(char)) {
      // Incrementar el conteo de la vocal correspondiente
      conteoVocales[char]++;
    }
  }

  return conteoVocales;
}