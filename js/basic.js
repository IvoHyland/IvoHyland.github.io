let edad = 18;

if (edad>=18){
    console.log("La persona es mayor de edad")
} else {
    console.log("La persona es menor de edad")
}


// for (inicializacion, condición, icremento/decremento)

let x = 0;
for (x; x < 5; x++){
    console.log("El valor de x es: ", x);
}

x = 10
while (x > 0){
    console.log("Mi variable vale "+x);
    x--
}

// El do-while ejecuta primero, pregunta despues.
do{
    console.log("Mi variable vale "+x);
} while (x == 50);

let i = 10;
for (i; i > 0; i--){
    if (i==5){
        break;
    }
    console.log("Mi variable vale "+i)
}

