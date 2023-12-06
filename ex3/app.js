/* Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>” */

//Crear variable con el nombre del usuario

let username = prompt('Por favor, ingresa tu nombre:');


/* Compruebo que el nombre introducido es válido, en caso de que lo sea saldrá un mensaje de bienvenida con el nombre del usuario. 
Si no fuera válido, se imprimiría en pantalla otro texto (en este caso, "nombre de usuario requerido"). */

if (username !== null && username !== "") {
    let mensaje = "Hola, " + username + ".";
    document.write(mensaje);
    }

 else {  
    document.write("Alert! Nombre de usuario requerido.");
}