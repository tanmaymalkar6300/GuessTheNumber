let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let result = document.getElementById('result');

    if (userGuess < 1 || userGuess > 10) {
        result.textContent = "Please enter a number between 1 and 10.";
    } else if (userGuess == randomNumber) {
        result.textContent = "Congratulations! You guessed the correct number!";
    } else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    }
}
