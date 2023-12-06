//Escribe un programa que pida una frase y escriba las vocales que aparecen

// Llamamos al botón de mostrar vocales desde el escuchador de eventos: 
document.getElementById('mostrarVocalesBtn').addEventListener('click', function() {
  
// Obtener la frase ingresada por el usuario
  const frase = document.getElementById('fraseInput').value;

  // Filtrar las vocales de la frase
  const vocales = frase.match(/[aeiou]/gi);

  // Mostrar el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `Las vocales en la frase son: ${vocales ? vocales.join(', ') : 'ninguna'}.`;
});