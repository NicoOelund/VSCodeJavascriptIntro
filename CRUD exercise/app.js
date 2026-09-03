document.addEventListener("DOMContentLoaded", initApp);

const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

async function initApp() {
    const todos = await fetchTodos();
    displayTodos(todos);
}

async function fetchTodos() {
    try {
        const response = await fetch(`${BASE_URL_TODOS}`);
        if (!response.ok) {
            throw new Error(`HTTP error!`);
        }
        const todos = await response.json();
        return todos; 
    } 
    catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}

function displayTodos(todos) {
    const tableBody = document.getElementById("todoTableBody");
    tableBody.innerHTML = "";
    for (const todo of todos) {
        renderTodoRow(todo);
    }
}

function renderTodoRow(todo) {
    const tableBody = document.getElementById("todoTableBody");
    const row = document.createElement("tr");
    row.setAttribute("data-id", todo.id);

    const td1 = document.createElement("td"); // probably should name titleTd
    td1.textContent = todo.title;
    const td2 = document.createElement("td"); // userIdTD
    td2.textContent = todo.userId;
    const td3 = document.createElement("td"); // statusTd
    td3.textContent = todo.completed;
    row.append(td1, td2, td3);

    const buttonTd = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.setAttribute("data-action", "edit");
    editButton.textContent = "Edit";
    
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-action", "delete");
    deleteButton.textContent = "Delete";

    buttonTd.append(editButton, deleteButton);
    row.appendChild(buttonTd);

    tableBody.appendChild(row);
}