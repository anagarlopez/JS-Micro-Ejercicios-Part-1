// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

function numPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    const inputNumero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    const numero = parseInt(inputNumero.value);

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, ingrese un número válido.';
        return;
    }

    if (numPrimo(numero)) {
        resultado.textContent = `${numero} es un número primo.`;
    } else {
        resultado.textContent = `${numero} no es un número primo.`;
    }
}