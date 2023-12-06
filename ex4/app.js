/*Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.*/


// Pide al usuario que ingrese el primer número
let numeroUno = prompt('Ingresa el primer número:');

// Pide al usuario que ingrese el segundo número
let numeroDos = prompt('Ingresa el segundo número:');

// Convierte los valores ingresados a números
const num1 = parseFloat(numeroUno);
const num2 = parseFloat(numeroDos);

// Verifica si ambos valores son números válidos

if (!isNaN(num1) && !isNaN(num2)) {
  // Calcula suma de los dos números
  const resultado = num1 + num2;

  // Muestra un mensaje con el resultado
  document.write(`La suma de ${num1} + ${num2} es ${resultado}`);
} else {
  // Muestra un mensaje si alguno de los valores no es un número válido
  document.write('Por favor, ingresa números válidos.');
}