//Escribir un programa que escriba en pantalla los divisores de un número dado

// Ponemos el escuchador de eventos al botón
document.getElementById('resultBtn').addEventListener('click', function() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById('numeroInput').value);

    // Verificar si el número es válido
    if (!isNaN(numero)) {
      // Encontrar y mostrar los divisores
      const divisores = encontrarDivisores(numero);
      const resultadoElement = document.getElementById('resultado');
      resultadoElement.textContent = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
    } else {
      // Mostrar un mensaje si el número no es válido
      alert('Por favor, ingresa un número válido.');
    }
  });

  function encontrarDivisores(numero) {
    // Inicializar un array para almacenar los divisores
    const divisores = [];

    // Iterar desde 1 hasta el número para encontrar los divisores
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores.push(i);
      }
    }

    return divisores;
  }