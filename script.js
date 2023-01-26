
let userName = prompt(`Bienvenido a la Calculadora de Ruben.\nIngrese su nombre:`);
alert(`Hola ${userName}, comencemos!`)

let suma = (x,y) => x+y;
let resta = (x,y) => x-y;
let producto = (x,y) => x*y;
let cociente = (x,y) => x/y;

let verifyNumber = function(num){
    num = num.toString();
    while(num === 'NaN'){
        num = Number(prompt(`Caracter invalido\nIngrese un numero:`));
        num = num.toString();
    }
    return Number(num);
    }

let exit;

while (exit != 'n') {

    let numberOne = Number(prompt(`Ingrese un numero:`));
    numberOne = verifyNumber(numberOne);

    let operador = prompt(`${numberOne}\nIngrese operación\n +  -  *  /`);

    while (operador != '+' && operador != '-' && operador != '*' && operador != '/') {
        operador = (prompt(`${numberOne}\nOperador invalido\nIngrese uno valido\n +  -  *  / `));
    }

    let numberTwo = Number(prompt(`${numberOne} ${operador}\nIngrese numero:`));
    numberTwo = verifyNumber(numberTwo);

    


    switch (operador) {

        case '+': alert(`Resultado:   ${numberOne} + ${numberTwo} = ${suma(numberOne, numberTwo)}`);
            break;
        case '-': alert(`Resultado:   ${numberOne} - ${numberTwo} = ${resta(numberOne, numberTwo)}`);
            break;
        case '*': alert(`Resultado:   ${numberOne} * ${numberTwo} = ${producto(numberOne, numberTwo)}`);
            break;
        case '/': alert(`Resultado:   ${numberOne} / ${numberTwo} = ${cociente(numberOne, numberTwo)}`);
            break;
        }
    exit = prompt(`desea hacer otra operación:\n s / n`);

    while (exit != 's' && exit != 'n') {
        exit = prompt(`desea hacer otra operación:\n s / n`);
    }
}
alert(`Adios ${userName} hasta pronto!`);

