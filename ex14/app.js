// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

// Ponemos el escuchador de eventos al botón

const resultsBtn = document.getElementById("resultBtn");

function divisorCommon() {
// declarar variable que recoge el número del usuario: "num"
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultDivisors = document.getElementById("result");

  // declarar variable "divisorsNum" como array vacío
    let divisorsNum = [];
    
    result.innerHTML = "Los divisores comunes de " + num1 + " y " + num2 + " son: ";
// añadir con métido .push el número por el cuál es divisible
    for (let i = 0; i <=(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0 ) {
            divisorsNum.push(i);      
        }        
    }    
    result.innerHTML += divisorsNum.join(", ");  
 
}
    resultsBtn.addEventListener("click", divisorCommon);