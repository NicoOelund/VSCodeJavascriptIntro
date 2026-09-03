document.addEventListener("DOMContentLoaded", initApp);

const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

async function initApp() {
    const todos = await fetchTodos();
    displayTodos(todos);

    document.querySelector("#todoForm").addEventListener("submit", handleFormSubmit);
    document.querySelector("#todoTableBody").addEventListener("click", handleTableClick);
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

async function addTodo(todo) {
    try {
        const response = await fetch(`${BASE_URL_TODOS}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        if (!response.ok) {
            throw new Error(`HTTP error!`);
        }
        const newTodo = await response.json();
        return newTodo;
    }
    catch (error) {
        console.log(`Fetch error: ${error}`)
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get("id");
    const title = form.get("title");
    const userId = Number(form.get("userId"));
    const completed = form.get("completed") === "on";

    const TodoData = {
        title,
        userId,
        completed
    };

    if (id) {
        const updatedTodo = await updateTodo(id, TodoData);
        console.log("Updated todo:", updatedTodo)
        // Optionally, update the row in the table without refetching all todos
        // You would need to find the row with the corresponding ID and update its cells
    } 
    else {
        const createdTodo = await addTodo(TodoData);
        console.log("Created todo:", createdTodo);
        renderTodoRow(createdTodo);
    }
    

    event.target.reset();
    document.querySelector("#todoId").value = "";
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${BASE_URL_TODOS}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error(`HTTP error!`);
        }
        return true;
    }
    catch (error) {
        throw new Error(`Fetch error: ${error}`);
    }
}

async function handleTableClick(event) {
    const action = event.target.getAttribute("data-action");
    const row = event.target.closest("tr");
    const id = row.getAttribute("data-id");
    if (action === "delete") {
        const response = await deleteTodo(id);
        if (response) {
            row.remove();
        }
    } 
    else if (action === "edit") {
        // Populate form with existing todo data
        const title = row.children[0].textContent;
        const userId = row.children[1].textContent;
        const completed = row.children[2].textContent === "Yes";

        // Use .value for inputs and .checked for checkbox
        document.querySelector("#todoId").value = id; // hidden input to store the ID of the todo being edited
        document.querySelector("#todoTitle").value = title;
        document.querySelector("#userId").value = userId;
        document.querySelector("#completed").checked = completed;

    }
}

async function updateTodo(id, updatedTodo) {
    try {
        const response = await fetch(`${BASE_URL_TODOS}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    });
    if (!response.ok) {
        throw new Error(`HTTP error!`);
    }
    const updatedData = await response.json();
    return updatedData;
    } 
    catch (error) {
        throw new Error(`Fetch error: ${error}`);
    }
}