var gameWordElement = document.getElementById('gameWord');
var gameWord = 'javascript';
var underScores = [];

function getUnderscores() {
    for (let i = 0; i < gameWord.length; i++) {
        underScores.push('_ ');
    }
}

function displayWord() {
    gameWordElement.innerHTML = underScores.join('');
}

function checkWin() {
    if (gameWord === underScores.join('')) {
        console.log('checkWin works');
       // alert('You Win!');
       document.getElementById('title').innerHTML = 'YOU WON!!!'
    }
}

getUnderscores();
displayWord();

document.addEventListener('keydown', function (event) {

    for (let i = 0; i < gameWord.length; i++) {

        if (gameWord[i] === event.key) {
            underScores[i] = event.key;
        }
    }
    displayWord();
    checkWin();
});
