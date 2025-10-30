/*
    Reto 01: La posesión del código
    Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

    Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.
*/
function translatePossessed(message) {
    if (message.trim() === '')
        return '';
    var res = message
        .split(' ')
        .map(function (word) { return word.split('').reverse().join(''); })
        .join(' ');
    return res;
}
var message = 'i yojne gnihctaw uoy';
console.log(translatePossessed(message)); // "i enjoy watching you"
var message = '      ';
console.log('START' + translatePossessed(message) + 'END'); // "i enjoy watching you"
