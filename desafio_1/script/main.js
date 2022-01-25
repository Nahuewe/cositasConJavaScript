// Va a tratar sobre adivinar cuantos michis hay escondidos

alert("Algunos gatitos siguen escondidos, ¿cuantos faltan?"+"\n"+
"Tenes que adivinar el número entre 3 y 14 para ganar");

let numero = parseInt(prompt("Elegí un número entre 3 y 14"));
let random = Math.floor((Math.random() * (14-3))+3);
let diferencia;
    
while(numero != random){
    diferencia = Math.abs(random-numero);
    alert("El número no es el correcto, intenta de nuevo 😿"+"\n"+
    "Pista: el número está a una distancia de +/-" +diferencia);
    numero = parseInt(prompt("Elegí un número entre 3 y 14"));
}

if(numero==random){
    alert("Felicidades 😸, el número es: "+random);
}