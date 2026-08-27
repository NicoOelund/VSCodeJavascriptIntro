


// ============================
// INSTRUCTIONS
// ============================
// This exercise uses a separate module (users.js) for all user data handling.
//
// 1. When the form is submitted, prevent the default behavior.
// 2. Use FormData to read the name and age from the form fields.
// 3. Use addUser(user) from users.js to add the new user object.
// 4. Use getUsers() from users.js to get the current list of users.
// 5. Display all users in the #userList as <li> elements (show name and age).
// 6. Clear the form after adding a user.
// 7. Do NOT store or mutate user data in this file—use only the module functions.

import { getUsers, addUser } from "./users.js";

window.addEventListener("DOMContentLoaded", initApp);


function initApp() {
    // TODO: render initial users using displayUsers()
    // TODO: Add submit event listener to #userForm
}

function handleFormSubmit(event) {
    // TODO: Prevent default
    // TODO: read form data
    // TODO: add user using addUser()
    // TODO: display users using displayUsers()
    // TODO: clear the form
}

function displayUsers() {
    // TODO: Get all users, and clear existing list
    // TODO: Call displayUserItem for each user
}

function displayUserItem(user) {
    // TODO: Create <li> for user and append to #userList

}