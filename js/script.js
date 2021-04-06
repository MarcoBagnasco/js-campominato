/* 
CAMPO MINATO
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// Setup
var numMax;
var numBomb = 16;
var attempt;
var bombList = [];
var insertList = [];
var user = 0;

//DIFFICULTY LEVEL
var level = parseInt(prompt('Choose difficulty level (0, 1, 2)').trim());
while(isNaN(level) || level < 0 || level > 2){
    level = parseInt(prompt('Choose difficulty level (0, 1, 2)').trim());
}
switch(level){
    case 0:
        numMax = 100;
        break;
    case 1:
        numMax = 80;
        break;
    case 2:
        numMax = 50;
}
attempt = numMax - numBomb;

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
    user = parseInt(prompt('Enter number from 1 to ' + numMax + '\nAttempt number: ' + insertList.length + ' of ' + attempt).trim());
    while(isNaN(user) || user < 1 || user > numMax){
        user = parseInt(prompt('Invalid value.\nEnter number from 1 to ' + numMax).trim());
    }
    //Check Choice
    if(bombList.includes(user)){
        alert('BOOM!!You lose...\nNumber of attempts: ' + insertList.length);
    } else if(insertList.includes(user)){
        alert('Number already entered.\nEnter number from 1 to ' + numMax);
    } else{
        insertList.push(user);
    }
    //Check Attempts
    if(insertList.length === attempt){
        alert('You Win!!!');
    }
}

// END GAME
console.log('--- GAME OVER ---');
console.log('Valid number entered: ' + insertList);
console.log('Number of attempts: ' + insertList.length);


/***********
* FUNCTIONS
************/
function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}