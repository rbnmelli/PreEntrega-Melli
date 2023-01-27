// Presentación y mensaje de bienvenida. //Presentation and welcome message.

let userName = prompt(`Bienvenido a la Calculadora de Ruben.\nIngrese su nombre:`);
alert(`Hola ${userName}, comencemos!`)

// Funciones aritméticas básicas para dos parámetros. //Basic arithmetic functions for two parameters.

const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;
const exponentiation = x => x**2;
const rootOfNumber = x => Math.sqrt(x);

// Función que verifica si se ingresa un tipo de dato valido (número) y en caso de ser inválido pide corrección. // Function that verifies if a valid data type (number) is entered and if it is invalid, it requests correction.

const verifyNumber = function(num){
    num = num.toString();
    while(num === 'NaN'){
        num = Number(prompt(`Caracter invalido\nIngrese un numero:`));
        num = num.toString();
    }
    return Number(num);
}

// Cuerpo del logaritmo donde se desarrollan la interacción entre el usuario y la calculadora. //Body of the logarithm where the interaction between the user and the calculator takes place.

let exit;

while (exit != 'n') {

    // Ingresa el primer dato y llamo a la función verifyNumber // Enter the first data and call the verifyNumber function

    let numberOne = Number(prompt(`Ingrese un numero:`));   
    numberOne = verifyNumber(numberOne);

    // Selecciono el tipo de operación aritmética. Verifico que sea una operación valida, si no pido que vuelva a ingresar// I select the type of arithmetic operation. I verify that it is a valid operation, if not I ask you to enter again

    let operador = prompt(`${numberOne}\nIngrese operación\nSum( + ) Res( - ) Mult( * ) Div( / ) N²( ** ) √2( /2 )`);

    while (operador != '+' && operador != '-' && operador != '*' && operador != '/' && operador != '**' && operador != '/2') {
        operador = (prompt(`${numberOne}\nOperador invalido\nIngrese uno valido\nSum( + ) Res( - ) Mult( * ) Div( / ) N²( ** ) √2( /2 )`));
    }
    switch (operador) {
        case '**': alert(`Resultado:   ${numberOne}² = ${exponentiation(numberOne)}`);
            break;
        case '/2': 
            if(numberOne < 0){
                alert(`Error, no existe raíz cuadrada de un número negativo`);
                break;
            }else{
                alert(`Resultado:   √${numberOne} = ${rootOfNumber(numberOne)}`);
            break;
            }
        default:
        // Ingresa el segundo dato y llamo a la función verifyNumber // Enter the second data and call the verifyNumber funct   ion
        let numberTwo = Number(prompt(`${numberOne} ${operador}\nIngrese numero:`));
        numberTwo = verifyNumber(numberTwo);
        //Se realiza el cálculo pedido llamando a la función correspondiente y muestro el resultado. // The requested calculation is performed by calling the corresponding function and I display the result.
        switch (operador) {
            case '+': alert(`Resultado:   ${numberOne} + ${numberTwo} = ${add(numberOne, numberTwo)}`);
                break;
            case '-': alert(`Resultado:   ${numberOne} - ${numberTwo} = ${subtract(numberOne, numberTwo)}`);
                break;
            case '*': alert(`Resultado:   ${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);
                break;
            case '/': 
                if(numberTwo == 0){
                    alert(`Error, no es posible dividir por 0`);
                }else{
                    alert(`Resultado:   ${numberOne} / ${numberTwo} = ${divide(numberOne, numberTwo)}`);
                break;
                }
            }
        }
        // Pido al usuario que decida si quiere seguir o terminar. Verifico que sea una opción valida, si no pido que vuelva a ingresar. // I ask the user to decide if they want to continue or end. I verify that it is a valid option, if not I ask you to enter again.

    exit = prompt(`Desea hacer otra operación:\n s / n`);
    while (exit != 's' && exit != 'n') {
        exit = prompt(`Desea hacer otra operación:\n s / n`);
    }
}
// Final y saludo de despedida. // End and farewell greeting.
alert(`Adios ${userName} hasta pronto!`);
