alert(`Bienvenido a Brain Challenge`);

let players = Number(prompt(`Ingrese el numero de jugadores\n1-4`));

// Clase que construye los objetos usuarios 

class Users {
    constructor(nameUser, name, edad, avatar ){
    this.nameUser = nameUser;
    this.name = name;
    this.edad = edad;
    this.avatar = avatar;
    this.score = 0;
    this.total = 0;
}
    addScore(){
        this.score = Math.floor(Math.random() * (7-1) + 1);
        return(this.total = this.total + this.score);
    }
};

// Creación de usuarios con la clase Users se almacenan en el array usersTotal

let usersTotal = [];

for(i = 0 ; i < players ; i++){
    let nameUsersVerify = [];
    usersTotal.push( new Users (prompt(`Ingrese nombre usuario ${i+1}`), prompt(`Ingrese nombre`), Number(prompt(`Ingrese edad`)), prompt(`Eliga un avatar`)));
    let verify = nameUsersVerify.indexOf(usersTotal[i].nameUser);
    nameUsersVerify.push(usersTotal[i].nameUser);
    if(verify < 0){
        alert(`Usuario cargado correctamente`);
    }
    else{
        while (verify >= 0) {
            usersTotal[i].nameUser = prompt(`Ingrese nombre usuario ${i+1} nuevamente`);
            verify = nameUsersVerify.indexOf(usersTotal[i].nameUser);
        }
        nameUsersVerify.push(usersTotal[i].nameUser);
        alert(`Usuario cargado correctamente`);
    }
};

//----------------------------------------------------------------------------------------------------

// Base de datos donde se guardan las preguntas y respuestas en diferentes objetos separados por categorias

const questions = {
    history : ['En que año comenzo la 1ra Gerra Mundial?', 'Quién fue el primer hombre en caminar sobre la luna?', 'Quién es el fundador del Partido Comunista?',],
    sports : ['Que numeros uso Michael Jordan en la NBA?', 'Cuantos goles hizo Maradona en Copas del Mundo?', 'Que selección ganó la Copa del Mundo de Alemania 2006?',],
    geography: ['Cuánto mide el Monte Everest?', 'En que continente se situa Egipto?', 'Cuál es la ciudad más poblada del mundo?',],
    art: ['Cuantos Oscars ganó la pelicula "Titanic" de 1997?', 'En que año se publicó el albún "Sgt. Peppers Lonely Hearts Club Band" de The Beatles?', 'Como se llama el abogado de la familia Simpson?',]
};

const responses = {
    history : [['1934', '1919', '1908'], ['Buzz Aldrin', 'Charles Conrad', 'David Scott'], ['Stalin', 'Marx', 'Trotsky']],
    sports : [['23 - 55', '32 - 45', '15 - 33'], ['6', '7', '9'], ['Alemania', 'España', 'Brasil']],
    geography: [['Entre 7500 y 8000 mts.', 'Entre 8000 y 8500 mts.', 'Más de 9000 mts.'], ['Asia', 'America', 'Europa'], ['Nueva Delhi, India', 'Mexico DF, Mexico', 'Pekín, China']],
    art: [['9', '10', '12'], ['1962', '1969', '1964'], ['Troy McClure', 'Nick Riviera', 'Seymour Skinner']]
};

const corrects = {
    history : ['1914', 'Neil Armstrong', 'Lenin',],
    sports : ['23 - 45', '8', 'Italia',],
    geography: ['Entre 8500 y 9000 mts.', 'Africa', 'Tokio, Japon',],
    art: ['11', '1967', 'Lionel Hutz',]
}

//----------------------------------------------------------------------------------------------------
// Función que genera una pregunta al azar (tiene un error que lo dejé porque si anduviera entraria en un bucle infinito)

function generateQuestionIndex(){
    let questionNumber;
    let arrayQuestions = [];
        questionNumber = (Math.floor(Math.random() * 3));
        while (arrayQuestions.includes(arrayQuestions) == true) {
            questionNumber = (Math.floor(Math.random() * 3));
        }
    arrayQuestions.push(arrayQuestions);
    return questionNumber;
}

// Función que busca las respuestas de la pregunta generada y las ordena al azar
//===================================================================================================
function generateResponseIndex(){
    let numberOrder;
    let arrayOrder = [];
    for(i = 0; i < 4; i++){
        numberOrder = (Math.floor(Math.random() * 4));
        while (arrayOrder.includes(numberOrder) == true) {
            numberOrder = (Math.floor(Math.random() * 4));
        }
        arrayOrder.push(numberOrder);
    }
return arrayOrder;
}

function questionsGame(quesIndex, resIndex, questionItem, responseItem, correct){
    
    let resGame = [null, null, null, null];

    for (let index = 0; index < 3; index++) {
        resGame.splice(quesIndex[index], 1, (responseItem[resIndex][index]));
    }
    resGame.splice(quesIndex[3], 1, (correct[resIndex]));

    return (`Pregunta: ${questionItem[resIndex]}\nA: ${resGame[0]}\nB: ${resGame[1]}\nC: ${resGame[2]}\nD: ${resGame[3]}`);
}

function responsesGame(resOrder, resIndex, responseItem, correct){

    let resGame = [null, null, null, null];

    for (let index = 0; index < 3; index++) {
        resGame.splice(resOrder[index], 1, (responseItem[resIndex][index]));
    }
    resGame.splice(resOrder[3], 1, (correct[resIndex]));

    return (resGame);
}
//===================================================================================================

// Función que convierte la opción de respuesta elegida por un numero de indice
function returnNumber(responseUser){
    switch (responseUser) {
        case 'a':
            return (responseUser = 0);
            break;
        case 'b':
            return (responseUser = 1);
            break;
        case 'c':
            return (responseUser = 2);
            break;
        case 'd':
            return (responseUser = 3);
            break;

        default:
            break;
    }
}

// Funciones que comparan la respuesta y retorna el resultado
function ok(item, response){
    let goodResponse = item.indexOf(response);
    return(goodResponse);
    }

function endQuestion(res){
    if(result == responseIndex){
        return (alert(`RESPUESTA CORRECTA!`));
    }
    else{
        return (alert(`RESPUESTA INCORRECTA`));
    }
}

//----------------------------------------------------------------------------------------------------

// Bucle donde se desarroya el juego

let win = 0;

while (win < 12) {
    for (let i = 0; i < usersTotal.length; i++) {
        alert(`Jugador ${i+1} Arroje el dado`);

        let responseIndex = generateQuestionIndex();
        let questionIndex = generateResponseIndex();
          
        win = usersTotal[i].addScore();

            if(win == 1 || win == 5 || win == 9 || win == 13 || win == 17 || win == 21 || win == 25 || win == 29){
                let responseGame = responsesGame(questionIndex, responseIndex, responses.history, corrects.history);
                let responseUser = prompt(`${questionsGame(questionIndex, responseIndex, questions.history, responses.history, corrects.history)}`);
                responseUser = returnNumber(responseUser);
                let result = (ok(corrects.history, responseGame[responseUser]));
                
                if(result == responseIndex){
                    alert(`RESPUESTA CORRECTA!`);
                }
                else{
                    alert(`INCORRECTA\nRESPUESTA CORRECTA: ${corrects.history[responseIndex]}`);
                }
            }   
            if(win == 2 || win == 6 || win == 10 || win == 14 || win == 18 || win == 22 || win == 26 || win == 30){
                let responseGame = responsesGame(questionIndex, responseIndex, responses.sports, corrects.sports);
                let responseUser = prompt(`${questionsGame(questionIndex, responseIndex, questions.sports, responses.sports, corrects.sports)}`);
                responseUser = returnNumber(responseUser);
                let result = ok(corrects.sports, responseGame[responseUser]);

                if(result == responseIndex){
                    alert(`RESPUESTA CORRECTA!`);
                }
                else{
                    alert(`INCORRECTA\nRESPUESTA CORRECTA: ${corrects.sports[responseIndex]}`);
                }
            }
            if(win == 3 || win == 7 || win == 11 || win == 15 || win == 19 || win == 23 || win == 27 || win == 31){
                let responseGame = responsesGame(questionIndex, responseIndex, responses.geography, corrects.geography);
                let responseUser = prompt(`${questionsGame(questionIndex, responseIndex, questions.geography, responses.geography, corrects.geography)}`);
                responseUser = returnNumber(responseUser);
                let result = ok(corrects.geography, responseGame[responseUser]);

                if(result == responseIndex){
                    alert(`RESPUESTA CORRECTA!`);
                }
                else{
                    alert(`INCORRECTA\nRESPUESTA CORRECTA: ${corrects.geography[responseIndex]}`);
                }
            }        
            if(win == 4 || win == 8 || win == 12 || win == 16 || win == 20 || win == 24 || win == 28 || win == 32){
                let responseGame = responsesGame(questionIndex, responseIndex, responses.art, corrects.art);
                let responseUser = prompt(`${questionsGame(questionIndex, responseIndex, questions.art, responses.art, corrects.art)}`);
                responseUser = returnNumber(responseUser);
                let result = ok(corrects.art, responseGame[responseUser]);

                if(result == responseIndex){
                    alert(`RESPUESTA CORRECTA!`);
                }
                else{
                    alert(`INCORRECTA\nRESPUESTA CORRECTA: ${corrects.art[responseIndex]}`);
                }
            }
    }
}
alert(`Gracias por probar la versión preliminar de Brain Challenge, valoro tus sugerencias y te espero pronto con más novedades`)

    
    


