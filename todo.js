function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.textContent = taskText;
            
            let completeBtn = document.createElement("button");
            completeBtn.textContent = "✔";
            completeBtn.onclick = function () {
                span.classList.toggle("completed");
            };
            
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "✖";
            deleteBtn.classList.add("delete");
            deleteBtn.onclick = function () {
                li.remove();
            };
            
            li.appendChild(span);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }
