console.log('JS loaded properly');

var gameWord = 'javascript'

document.addEventListener('keydown', function(event) {
    console.log('key was pressed -', event.key);
    console.log('gameWord -', gameWord)

    console.log('Is it included?', gameWord.includes(event.key))
});