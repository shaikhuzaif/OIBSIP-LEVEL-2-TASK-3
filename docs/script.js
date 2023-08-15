function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = task;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    input.value = "";
  }
  