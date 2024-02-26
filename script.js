// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = document.createTextNode(taskInput.value.trim());
        const deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "&times;";
        deleteBtn.onclick = function () {
            taskList.removeChild(task);
        };

        const task = document.createElement("li");
        task.appendChild(taskText);
        task.appendChild(deleteBtn);

        taskList.appendChild(task);
        taskInput.value = "";
    }
}