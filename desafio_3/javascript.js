// Funcion valor 1
function value1F() {
    let value1 = prompt("Ingresa el primer número");

    if (isNaN(value1) || value1 == null || value1 == "" || /^\s+$/.test(value1)) {

        while (isNaN(value1) || value1 == null || value1 == "" || /^\s+$/.test(value1)) {
            value1 = prompt("Por favor ingresa un número valido");
        }
        value1 = parseFloat(value1);

    } else {
        value1 = parseFloat(value1);
    }

    console.log(`Value 1 is a ${typeof (value1)}: ${value1}`)
    return value1;
}

// Funcion valor 2
function value2F() {
    let value2 = prompt("Ingresa el segundo número");

    if (isNaN(value2) || value2 == null || value2 == "" || /^\s+$/.test(value2)) {

        while (isNaN(value2) || value2 == null || value2 == "" || /^\s+$/.test(value2)) {
            value2 = prompt("Por favor ingresa un número valido");
        }
        value2 = parseFloat(value2);

    } else {
        value2 = parseFloat(value2);
    }

    console.log(`Value 2 is a ${typeof (value2)}: ${value2}`)
    return value2;
}

// Funcion Sumar
function sumar() {
    alert('Elegí que números sumar');

    let N1 = value1F();
    let N2 = value2F();
    let sumar = N1 + N2;

    alert(`Resultado: \n${N1} + ${N2} = ${sumar}`);
}

// Funcion Restar
function restar() {
    alert('Elegí que números restar');

    let N1 = value1F();
    let N2 = value2F();
    let restar = N1 - N2;

    alert(`Resultado: \n${N1} - ${N2} = ${restar}`);
}

// Funcion Multiplicar
function multiplicar() {
    alert('Elegí que números multiplicar');

    let N1 = value1F();
    let N2 = value2F();
    let multiplicar = N1 * N2;

    alert(`Resultado: \n${N1} x ${N2} = ${multiplicar}`);
}

// Funcion Dividir
function dividir() {
    alert('Elegí que números dividir');

    let N1 = value1F();
    let N2 = value2F();
    let dividir = N1 / N2;

    alert(`Resultado: \n${N1} / ${N2} = ${dividir}`);
}