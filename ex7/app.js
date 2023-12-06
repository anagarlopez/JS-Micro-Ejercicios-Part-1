//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function contarLetraA() {
  // Obtener la frase ingresada por el usuario
  const frase = document.getElementById('fraseInput').value;

  // Contar la cantidad de veces que aparece la letra 'a' (mayúscula o minúscula)
  const conteo = (frase.match(/a/gi) || []).length;

  // Mostrar el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `La letra 'a' aparece ${conteo} veces en la frase.`;
}