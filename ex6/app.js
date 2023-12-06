//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// declarar elemento "escuchador" (método addEventListener)

const resultAdd = document.getElementById("resultBtn");


// declarar variables num1, num2, num3 que recogen números introducidos

function numberGreater() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
// declarar variable resul con la suma de ambos números

let resulGreater = document.getElementById("result");

// crear sección donde se mostrará el mensaje con el resultado

    let greater = Math.max(num1, num2, num3);
    resulGreater.innerHTML = "El mayor de los tres números es:" + greater;
}
// crear función 

// asignar método addEventListener
resultAdd.addEventListener("click", numberGreater);