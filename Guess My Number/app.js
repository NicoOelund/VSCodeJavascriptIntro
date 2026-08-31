const MIN = 1;
const MAX = 100;
let secretNumber;
let attempts;

// DOM elements to be used:
const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const feedback = document.querySelector("#feedback");
const attemptsDisplay = document.querySelector("#attempts");
const restartBtn = document.querySelector("#restartBtn");

window.addEventListener("DOMContentLoaded", initGame);

// TODO
function initGame() {
	// TODO 6: Call the `resetGame` function to initialize the game state when the page loads.
    resetGame();

	// TODO 14: Add event listener to the guess form
    guessForm.addEventListener("submit", handleGuess);

	// TODO 15: Add event listener to the restart button
    restartBtn.addEventListener("click", resetGame);
    
}

// TODO
function resetGame() {
    // TODO 1: Generate a random number between MIN and MAX, and store it in the `secretNumber` variable.
	// Hint: Use `Math.random()` and `Math.floor()` to generate the random number.
    secretNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

	// TODO 2: Reset the attempts counter to 0.
    attempts = "0";
    
	// TODO 3: Update the attemptsDisplay in the DOM to show the reset attempts count.
    attemptsDisplay.textContent = `Attempts = ${attempts}`;
    
	// TODO 4: Clear any feedback messages in the DOM.
    feedback.textContent = "";
    // could use innerHTML instead.
    
	// TODO 5: Add the "hidden" class to the restart button to hide it.
    restartBtn.classList.add("hidden");
    
}

function handleGuess(event) {
	// TODO 7: Prevent the default form submission behavior to avoid page reloads.
    event.preventDefault();
    
    
	// TODO 8: Get the user's guess from the input field and convert it to a number (use `parseInt` ex. parseInt("2")).
    const guess = parseInt(guessInput.value);
    
	// TODO 9: Create a boolean variable `isBetweenRange` that checks if the guess is a valid number and within the defined range (between MIN and MAX).
    const isBetweenRange = guess > MIN && guess < MAX;

	// TODO 10: Create a boolean variable `isValidNumber` that checks if the guess is a valid number (not NaN use isNan function).
    const isValidNumber = !isNaN(guess);

	// TODO 11: If the guess is a valid number and within the range, increment the attempts counter and update the attempts display in the DOM.
    if (isBetweenRange && isValidNumber) {
        attempts++;
        attemptsDisplay.textContent = `Attempts = ${attempts}`;
    }

	// TODO 12: Provide feedback to the user:
	// - If the guess is correct, display a congratulatory message in the feedback element, and show the restart button (remove hidden class from restartBtn).
	// - If the guess is too low, display a message indicating that the guess is too low.
	// - If the guess is too high, display a message indicating that the guess is too high.
    if (guess > secretNumber) {
        feedback.textContent = `Your guess of ${guess} was too high!`;
    } 
    else if (guess < secretNumber) {
        feedback.textContent = `Your guess of ${guess} was too low!`;
    }
    else {
        feedback.textContent = `Congratulations, the correct number was ${secretNumber}!`;
        restartBtn.classList.remove("hidden");
    }

	// TODO 13: Clear the form input field (use event.target.reset() to clear the form after submission).
    event.target.reset();
}