const wordEl = document.querySelector(".word");
const oldwordsEl = document.querySelector(".old-words");

//Wortliste
let words = [];
let currentWord = "";
let previousWord = [];

fetch("words.txt")
 .then(function(response) {
    return response.text();
 })
 .then(function(text) {
    words = text.split(",");
 });

//Das hier passiert, wenn wir auf den Button klicken.
 function onClick() {
    if (currentWord) {
    previousWord.push(currentWord)   
    oldwordsEl.innerHTML = previousWord.join(", ");
    }
    //Neues wort generieren und als aktuelles Wort speichern.
    currentWord = getRandomWord();
    //Danach aktualiesieren wir unsere website, um das neue Wort anzuzeigen
    wordEl.innerHTML = currentWord;
 }

 function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
 }

 function getRandomWord() {
    return words[getRandomNumber(words.length)];
 }