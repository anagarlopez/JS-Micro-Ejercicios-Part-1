//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// Ponemos el escuchador de eventos al botón
const resultsBtn = document.getElementById("resultBtn");

function divisible() {

    let num = document.getElementById("numeroInput").value;
    let result = document.getElementById("result");
    let divisiblesNum = [];


        if (num % 2 === 0) {
            divisiblesNum.push(2);                 
        }
        if (num % 3 === 0) {
            divisiblesNum.push(3);       
        }
        if (num % 5 === 0) {
            divisiblesNum.push(5);       
        }
        if (num % 7 === 0) {
            divisiblesNum.push(7);
        }

        if (divisiblesNum.length >0) {
            result.innerHTML= "El número " + num + " es divisible por: " + divisiblesNum.join(", ");             
        }
        
        else {
            result.innerHTML = "El número " + num + " no es divisible por 2, 3, 5 ni 7";              
        }
}
    resultsBtn.addEventListener("click", divisible);