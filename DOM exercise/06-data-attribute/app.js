window.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    // TODO: Add event listener to #toggleBtn
    // Pass in the button element and the span to update
    // HINT: use () => handleToggle(btn, stateValueSpan) as the event handler
    let button = document.querySelector("#toggleBtn");
    let stateValueSpan = document.querySelector("#stateValue");
    button.addEventListener("click", () => handleToggle(button, stateValueSpan));
}

function handleToggle(button, stateValueSpan) {
    // TODO: get the attribute 'data-state' of btn
    // If it's 'off', change it to 'on'. If it's 'on', change it to 'off'.
    // Update the text content of stateValueSpan to show the current state.
    // Also, toggle the class 'on' on btn when state is 'on', remove it when 'off'.
    let stateValue = button.getAttribute("data-state");
    

    if (stateValue == "off") {
        stateValue = "on";
        stateValueSpan.textContent = stateValue;
    }
    else {
        stateValue = "off";
        stateValueSpan.textContent = stateValue;
    }

    button.classList.toggle("on");
    button.setAttribute("data-state", stateValue);
    console.log(stateValue)
}
