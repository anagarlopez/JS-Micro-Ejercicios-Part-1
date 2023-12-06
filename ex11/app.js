//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// Ponemos el escuchador de eventos al botón
document.getElementById('verificarDivisibilidadBtn').addEventListener('click', function() {
  
  
// Obtener el número ingresado por el usuario
  const numero = document.getElementById('numeroInput').value;

// Verificar la divisibilidad por 2, 3, 5 o 7
  let mensaje = '';
  if (numero % 2 === 0) {
    mensaje += 'Es divisible por 2. ';
  }
  if (numero % 3 === 0) {
    mensaje += 'Es divisible por 3. ';
  }
  if (numero % 5 === 0) {
    mensaje += 'Es divisible por 5. ';
  }
  if (numero % 7 === 0) {
    mensaje += 'Es divisible por 7. ';
  }

  // Mostrar el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = mensaje || 'No es divisible por 2, 3, 5 ni 7.';
});