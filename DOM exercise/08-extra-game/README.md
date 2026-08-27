# Click the Circle Game – Student Instructions

In this exercise, you will complete a simple DOM game where the player must click a moving circle as many times as possible before time runs out. Follow the steps below to implement the game in `app.js`.

## Step-by-Step Instructions

### 1. Set Up the Entry Point
- Add an event listener for the `window`'s `load` event that calls the `initApp` function.

### 2. Select DOM Elements
- In the `initApp` function, select the following elements using `document.querySelector` and assign them to the global variables:
  - The game area (`#game-area`)
  - The score display (`#score`)
  - The timer display (`#timer`)
  - The end message (`#end-message`)
  - The start button (`#start-btn`)
- Add a click event listener to the start button that calls the `startGame` function.

### 3. Implement `randomPosition()`
- This function should calculate a random position for the circle within the game area.
- Return an object with `left` and `top` properties (in pixels).

**Hint: Use Math.random() to generate random positions.**

### 4. Implement `createCircle()`
- Remove the previous circle if it exists.
- Create a new `div` element with the class `circle`.
- Use `randomPosition()` to set its position.
- Add a click event listener to the circle that calls `handleCircleClick`.
- Add the circle to the game area.

**Hint: Use `element.style.left` and `element.style.top` to position the circle.**

### 5. Implement `handleCircleClick()`
- If the game is active, increase the score and update the score display.
- Create a new circle at a random position.

**Hint: Call `createCircle()` to create a new circle.**

### 6. Implement `startGame()`
- Reset the score and timer.
- Set the game as active.
- Hide the end message and disable the start button.
- Create the first circle.
- Start a timer that counts down every second. When the timer reaches 0, call `endGame()`.

**Hint: Use `setInterval` to create the countdown timer. Read about the functions in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval).**

**You can use the following code snippet to help you set up the timer:**

```js
timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
```

### 7. Implement `endGame()`
- Set the game as inactive and stop the timer.
- Remove the circle from the game area.
- Show the final score in the end message and enable the start button.

**Hint: remove the interval using `clearInterval(timerInterval)`. Read more about in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval).**

---

## Tips
Use the provided TODO comments in `app.js` to guide your implementation.

Test your game by opening `index.html` in your browser.

You can test the end game functionality by setting a short timer (e.g., 5 seconds) during development.

There is a solutions file available if you need to see how the full game works (to use it, update the script tag in `index.html` to point to `solution.js` instead of `app.js`).
