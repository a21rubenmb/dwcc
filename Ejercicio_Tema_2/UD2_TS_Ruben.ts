/*
    Tabla de multiplicar del 9
*/
console.log("\n\n## Tabla de multiplicar del 9 ##")
for (let i = 0; i <= 10; i++) {
    console.log(`9 * ${i} = ` + i * 9);
}

/*
    Secuencia de Fibonacci
*/

let primerValor:number = 0, segundoValor:number = 1, siguienteValor:number = 0;
let contador:number = 0
console.log("## Secuencia de Fibonacci ##")
while (contador < 10) {
    console.log(primerValor);
    siguienteValor = primerValor + segundoValor;
    primerValor = segundoValor;
    segundoValor = siguienteValor;
    contador++;
}

/*
    Números primos
*/

console.log("\n\n## Números primos ##")
let numeroIntroducido:number = 0;

do {
    //El prompt solo funciona en navegador
    numeroIntroducido = parseInt(prompt("Introduce un número:", "0"));
    //numeroIntroducido= 19;
    if (esNumeroPrimo(numeroIntroducido)) {
        console.log(`El numero ${numeroIntroducido} es un número primo`);
    } else {
        console.log(`El numero ${numeroIntroducido} NO es un número primo`);
    }
    numeroIntroducido = 0;

} while (numeroIntroducido > 0);

function esNumeroPrimo(numero:number) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}



console.log("## Edad con switch - case ##")
let edad :number= 0;
try {
    //edad = prompt("Introduce una edad correcta (0-100): ");
    edad = 19;
    switch (true) {
        case (edad <= 12):
            console.log("Neno");
            break;
        case (edad >= 13 && edad <= 18):
            console.log("Adolescente");
            break;
        case (edad >= 19 && edad <= 30):
            console.log("Xoven");
            break;
        case (edad >= 31 && edad <= 64):
            console.log("Adulto");
            break;
        case (edad >= 65 && edad <= 100):
            console.log("Xubilado");
            break;
    }
} catch (err) {
    console.log("El número introducido no es válido")
}


console.log("\n\n## Edad con if ##")
let edad2:number = 0;
try {
    //edad2 = prompt("Introduce una edad correcta (0-100): ");
    edad2 = 20;
    if (edad2 <= 12) {
        console.log("Neno")
    } else if (edad2 >= 13 && edad2 <= 18) {
        console.log("Adolescente")
    } else if (edad2 >= 19 && edad2 <= 30) {
        console.log("Xoven");
    } else if (edad2 >= 31 && edad2 <= 64) {
        console.log("Adulto")
    } else if (edad2 >= 65 && edad2 <= 100) {
        console.log("Xubilado");
    } else {
        console.log("Edad no válida");
    }
} catch (err) {
    console.log("El número introducido no es válido")
}

console.log("\n\n## Operaciones con desplazamientos de bit ##")
125/8
let resultado1:number = 125 >> 3;
console.log(resultado1); // Esto imprimirá 15 en la consola

40*4
let resultado2:number = 40 << 2;
console.log(resultado2); // Esto imprimirá 160 en la consola

25/2
let resultado3:number = 25 >> 1;
console.log(resultado3); // Esto imprimirá 12 en la consola

10*16
let resultado4:number = 10 << 4;
console.log(resultado4); // Esto imprimirá 160 en la consola
