const todos = [
    {
        text: "Learn HTML",
        done: false,
    },
];
console.log(todos);

const inputEl = document.querySelector("#todo-input");
const buttonEl = document.querySelector("#add-btn");
const listEl = document.querySelector("#todo-list");
const statusEl = document.querySelector("#status");

function render() {
    listEl.innerHTML = "";
    for (const todo of todos) {
        let element = document.createElement("li");
        element.textContent = todo.text;

        if (todo.done) {
            element.classList.add("done");
        }

        listEl.appendChild(element);
    }

    statusEl.textContent = `Status: ${todos.length} todos`;
}
render();

function addTodo(text) {
    text = text.trim();

    if (text == "") {
        return false;
    }

    const todo = {
        text: text,
        done: false,
    };

    todos.push(todo);

    return true;
}

function addTodoClicked() {
    let todoText = inputEl.value;

    if (addTodo(todoText)) {
        inputEl.value = "";
        inputEl.focus();
        render();
    }
}

buttonEl.addEventListener("click", addTodoClicked);

listEl.addEventListener("click", (event) => {
    // Find the index of the clicked <li> in the list
    const items = Array.from(listEl.children);
    const index = items.indexOf(event.target);

    if (index == -1) {
        return; // Clicked outside of a todo item
    }
    // Toggle the "done" status of the corresponding todo
    console.log("Clicked todo index:", index);
    todos[index].done = !todos[index].done;
    // Update the class of the clicked item based on the new status
    if (todos[index].done) {
        event.target.classList.add("done");
    } else {
        event.target.classList.remove("done");
    }
    render(); // Update the UI to reflect the change
});
