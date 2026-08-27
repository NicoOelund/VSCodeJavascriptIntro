// Global variables
let gameArea, scoreEl, timerEl, endMessage, startBtn;
let score = 0;
let timeLeft = 30;
let timerInterval = null;
let gameActive = false;
let circle = null;

// Entry point
// TODO: Add event listener for window load that calls initApp
window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    // TODO: Select DOM elements and assign to global variables
    // TODO: Add event listener to start button
    gameArea = document.querySelector("#game-area");
    scoreEl = document.querySelector("#score");
    timerEl = document.querySelector("#timer");
    endMessage = document.querySelector("#end-message");
    startBtn = document.querySelector("#start-btn");

    startBtn.addEventListener("click", startGame);
}

function randomPosition() {
    // TODO: Calculate and return a random position for the newCircle inside the game area
    let left = Math.random() * (gameArea.clientWidth - 50);
    let top = Math.random() * (gameArea.clientHeight - 50);

    return {
        left: left,
        top: top
    }
}

function createCircle() {
    // TODO: Create a new newCircle, position it randomly, and add it to the game area
    if (circle) {
        circle.remove();
    }
    
    let newCircle = document.createElement("div");
    newCircle.classList.add("circle");

    const position = randomPosition();

    newCircle.style.left = `${position.left}px`;
    newCircle.style.top = `${position.top}px`;

    newCircle.addEventListener("click", handleCircleClick);

    circle = newCircle;
    gameArea.appendChild(newCircle);
}

function handleCircleClick() {
    // TODO: Handle what happens when the newCircle is clicked
    if (gameActive) {
        score++;
        scoreEl.textContent = score;

        circle.remove();
        createCircle();
    }
}

function startGame() {
    // TODO: Start or restart the game, reset score and timer, and show the first newCircle
    gameActive = true;
    score = 0;
    timeLeft = 30;
    endMessage.style.display = "none";
    startBtn.removeEventListener("click", startGame);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    createCircle();
}

function endGame() {
    // TODO: End the game, show the final score, and clean up
    gameActive = false;
    clearInterval(timerInterval)
    if (circle) {
        circle.remove();
    }

    endMessage.textContent = `Game over! Your score: ${score}`;
    endMessage.style.display = "block";

    startBtn.addEventListener("click", startGame);
}
