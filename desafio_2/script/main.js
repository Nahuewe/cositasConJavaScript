// Datos personales //

// Alerta de saludo
alert('!Bienvenid@! Por favor completa tus datos:')

// Nombre
var firstname = prompt('¿Cual es tu nombre/s?');

// Apellido
var lastName = prompt('¿Cual es tu apellido/s?');

// Nacionalidad
var nacionalidad = prompt('¿Cual es tu nacionalidad?');

// Edad
// var age = prompt('¿Cual es tu edad?');

// Concatenacion de datos
var dataConcatenada = "Datos personales:" + "\n" + "Nombre: " + firstname + "\n" + "Apellido: " + lastName + "\n" + "Nacionalidad: " + nacionalidad + "\n";

alert(dataConcatenada);

// Operaciones //

// Suma
alert('Suma ➕');
var sumaN1 = prompt('Introducí el primer número:');
var sumaN2 = prompt('Introducí el segundo número:');
var sumando = parseFloat(sumaN1) + parseFloat(sumaN2);
alert('El resultado de ' + sumaN1 + " + " + sumaN2 + " es: " + sumando);
console.log('El resultado de ' + sumaN1 + " + " + sumaN2 + " es: " + sumando);

// Resta
alert('Resta ➖');
var restaN1 = prompt('Introducí el primer número:');
var restaN2 = prompt('Introducí el segundo número:');
var restando = parseFloat(restaN1) - parseFloat(restaN2);
alert('El resultado de ' + restaN1 + " - " + restaN2 + " es: " + restando);
console.log('El resultado de ' + restaN1 + " - " + restaN2 + " es: " + restando);

// Multiplicacion
alert('Multiplicación ✖');
var multiN1 = prompt('Introducí el primer número:');
var multiN2 = prompt('Introducí el segundo número:');
var multiplicando = parseFloat(multiN1) * parseFloat(multiN2);
alert('El resultado de ' + multiN1 + " x " + multiN2 + " es: " + multiplicando);
console.log('El resultado de ' + multiN1 + " x " + multiN2 + " es: " + multiplicando);

// Division
alert('Dividisión ➗');
var diviN1 = prompt('Introducí el primer número:');
var diviN2 = prompt('Introducí el segundo número:');
var dividiendo = parseFloat(diviN1) / parseFloat(diviN2);
alert('El resultado de ' + diviN1 + " / " + diviN2 + " es: " + dividiendo);
console.log('El resultado de ' + diviN1 + " / " + diviN2 + " es: " + dividiendo);