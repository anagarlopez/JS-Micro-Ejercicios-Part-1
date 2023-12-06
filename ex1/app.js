/* Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”. */


/* Declaro una constante con el texto que quiero imprimir en pantalla */
const title = "Hello Javascript"

/* Creo un div con id "title" en html y lo vinculo al js con un getElementbyId. */
const titleSection = document.getElementById('title')

/* Creo una función para imprimir el texto en la pantalla. */
function printTitle () {
    titleSection.innerHTML = /* html */ `
    <h1> ${title} </h1> 
    `
}

printTitle ();