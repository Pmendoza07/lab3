"use scrict";

function game (){

if (confirm("like people")){
alert("incorrect!!!!!your not special!");
}else{
    alert("correct!!!!!your special!");
}

if (confirm("I like Ms.nell")){
    alert("correct!!!!!your special!");
}else{
    alert("incorrect!!!!!your not special!");
}

if (confirm("Eve is a giant <3")){
    alert("correct!!!!!We all know it but she wont admit it!");
}else{
    alert("incorrect!!!!! you need to go to the eye doctor! (214) 645-0950 in case your cant find it! :)");
}


//5 questions
if (prompt("Do we need money? in others words we are all broke right?;)") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");
}

if (prompt("should we dip school?") === "no".toLowerCase || "n".toLowerCase){
    console.log("question one response is no");
}

if (prompt(" Is eve a monster?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");
}

if (prompt(" Is eve an ADDICT to her phone?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");
}
if (prompt("Does jordan look grumpy? ") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");
}


}
function getToKnowYou(){
    let username = prompt("What is your name?");
    alert("hello wierdooo0O0000Oo"+ username + "welcome to my site!")
    alert(username+ ", I hope you enjoy the rest of my site");
}

// Define array of correct answers
const correctAnswers = ["apple", "banana", "orange", "grape", "watermelon"];

// Define maximum attempts
const maxAttempts = 6;

// Function to check if user's guess is correct
function checkGuess(guess) {
    return correctAnswers.includes(guess.toLowerCase());
}

// Function to start the game
function startGame() {
    let attempts = 0;
    let guessedCorrectly = false;

    // Loop for user attempts
    while (attempts < maxAttempts && !guessedCorrectly) {
        const guess = prompt(`Attempt ${attempts + 1}/${maxAttempts}: Guess a fruit:`);

        if (guess === null) {
            alert("You have ended the game.");
            return;
        }

        if (checkGuess(guess)) {
            guessedCorrectly = true;
            alert("Congratulations! You guessed correctly.");
        } else {
            attempts++;
            alert("Incorrect guess. Please try again.");
        }
    }

    if (!guessedCorrectly) {
        alert(`Sorry, you have used all your attempts. The correct answers were: ${correctAnswers.join(", ")}`);
    }
}

// Start the game
startGame();