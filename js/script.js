/* 
CAMPO MINATO
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// Setup
var numMax = 10;
var numBomb = 2;
var attempt = numMax - numBomb;
var bombList = [];
var insertList = [];
var user = 0;

// CREATE BOMB LIST
while(bombList.length < numBomb){
    var bomb = randomNumber(numMax);

    if(!bombList.includes(bomb)){
        bombList.push(bomb);
    }
}
console.log(bombList); //test

//GAME MAIN LOOP
while((insertList.length < attempt) && (!bombList.includes(user))){
    //User Choice
    user = parseInt(prompt('Insert number from 1 to ' + numMax + '\nAttempt number: ' + insertList.length + ' of ' + attempt));
    while(isNaN(user) || user < 1 || user > numMax){
        user = parseInt(prompt('Invalid value.\nInsert number from 1 to ' + numMax));
    }
}


/***********
* FUNCTIONS
************/
function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}