/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”. */

/* Declaro una variable let con la suma que quiero realizar. */
const sumar = 3 + 5;

/* Declaro otra variable let, esta vez con el texto que quiero imprimir en pantalla más el resultado de la suma. */

const mensaje = document.createTextNode(`La suma de 3 + 5 es ${sumar}`);

// Muestra el resultado del nodo en la pantalla DOM:
document.body.appendChild(mensaje);
