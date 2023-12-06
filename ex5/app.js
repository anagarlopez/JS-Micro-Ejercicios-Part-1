/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/

// declarar elemento "escuchador" (método addEventListener)
// declarar variables num1, num2 que recogen números introducidos
// declarar variable resul con la suma de ambos números
// crear sección donde se mostrará el mensaje con el resultado
// crear función 
// asignar método addEventListener

const resultAdd = document.getElementById("resultBtn");

function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resulGreater = document.getElementById("result");
    let greater = Math.max(num1, num2);
    resulGreater.innerHTML = greater;}


resultAdd.addEventListener("click", sum);