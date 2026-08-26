"use strict";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    document.querySelector("#changeColorBtn").addEventListener("click", changeBackgroundColor);
    document.querySelector("#toggleBtn").addEventListener("click", toggleVisibility);
    document.querySelector("#increment").addEventListener("click", increment);
    document.querySelector("#decrement").addEventListener("click", decrement);
    document.querySelector("#reset").addEventListener("click", reset);
}

// Exercise 1: Change Background Color
function changeBackgroundColor() {
    var color = document.querySelector("#colorPicker").value;
    document.body.style.backgroundColor = color;
}

// Exercise 2: Toggle Visibility
function toggleVisibility() {
    const toggleText = document.querySelector("#toggleText");
    console.log(toggleText.classList);
    toggleText.classList.toggle("hidden");
}

// Exercise 3: Counter
function increment() {
    const counter = document.querySelector("#counter");
    counter.textContent++; // = parseInt(counter.textContent) + 1;
    console.log("Counter incremented");
}

function decrement() {
    const counter = document.querySelector("#counter");
    counter.textContent--;
    console.log("Counter decremented");
}

function reset() {
    const counter = document.querySelector("#counter");
    counter.textContent = "0";
    console.log("Counter reset");
}