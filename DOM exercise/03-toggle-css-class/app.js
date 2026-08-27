
// DOM classList Exercise
// =====================
// 1. When the page loads, set up event listeners for #square and #circle.
// 2. When #square is clicked, toggle the class "tilt" on the square element.
//    - If it has the class, remove it. If not, add it.
// 3. When #circle is clicked, toggle the class "move" on the circle element.
//    - If it has the class, remove it. If not, add it.
// 4. Use classList methods: add, remove, contains, and toggle.
// 5. Use function stubs below and complete the logic.

window.addEventListener("DOMContentLoaded", initApp);

const square = document.querySelector("#square");
const circle = document.querySelector("#circle");

function initApp() {
    // TODO: Add event listeners to #square and #circle
    square.addEventListener("click", handleSquareClick);
    circle.addEventListener("click", handleCircleClick);
}

function handleSquareClick() {
    // TODO: Toggle the "tilt" class on #square
    square.classList.toggle("tilt");
}

function handleCircleClick() {
    // TODO: Toggle the "move" class on #circle
    
    // circle.classList.toggle("move");

    if (circle.classList.contains("move")) {
        circle.classList.remove("move");
    } 
    else {
        circle.classList.add("move");
    }
}