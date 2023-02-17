let todoTasksText = [
"Buy milk",
"Eat dinner",
"Nail javascript",
"Give feedback",
];
let todoTasksStatus = [true, false, false, true];

function createNewTaskElement(task, index) {
// Create a new <p> element & set the text of the new <p> element
let newTodoTaskTextElement = document.createElement("p");
newTodoTaskTextElement.innerText = task;

// Mark the task as complete if the status is true
if (todoTasksStatus[index] === true) {
    newTodoTaskTextElement.classList.add("complete");
}

// Create a new <li> element and append the <p> element to it
let newTodoTaskElement = document.createElement("li");
newTodoTaskElement.appendChild(newTodoTaskTextElement);

// Create a new <button> element and append it to the <li> element
let completeButtonElement = document.createElement("input");
completeButtonElement.type = "check";
completeButtonElement.value = "Complete";
// completeButtonElement.value = "Complete";
completeButtonElement.onclick = function () {
    toggleComplete(index);
};
newTodoTaskElement.appendChild(completeButtonElement);

return newTodoTaskElement;
}

function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
    todoTasksText.push(newTask.value);
    todoTasksStatus.push(false);
    newTask.value = "";
    //  console.log(todoTasksText);
    updateTodoList();
    }
    }
    

function updateTodoList() {
let todoList = document.getElementById("todo-list");
todoList.innerHTML = "";

// Loop through the todoTasksText array
todoTasksText.forEach((task, index) => {
    let newTodoTaskElement = createNewTaskElement(task, index);

    // Append the <li> element to the <ul> element
    todoList.appendChild(newTodoTaskElement);
});
}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
console.log("Before", todoTasksStatus[index]);
if (todoTasksStatus[index] === false) {
    todoTasksStatus[index] = true;
} else {
    todoTasksStatus[index] = false;
}
updateTodoList();
}

updateTodoList();