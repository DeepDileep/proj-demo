const dateEle = document.querySelector("[type=date]");

const taskEle = document.querySelector("[type=text]");

const todoContainer = document.querySelector(".todo-container");

window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "Enter") {
    //   Read value from input elements
    const dateValue = dateEle.value;
    const taskValue = taskEle.value;

    console.log(dateValue, taskValue);

    // Create dynamic elements
    const todo = document.createElement("div");
    const date = document.createElement("div");
    const task = document.createElement("div");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");

    // Adding class names to the created elements(Provides css)
    todo.className = "todo";
    date.className = "date";
    task.className = "task";
    btnEdit.className = "edit";
    btnDel.className = "del";

    // Setting textcontent from input values
    date.textContent = dateValue;
    task.textContent = taskValue;
    btnEdit.textContent = "edit";
    btnDel.textContent = "del";


    // Appending to the DOM inorder to display
    todo.append(date, task, btnEdit, btnDel);

    todoContainer.append(todo);

    btnEdit.addEventListener("click", function () {
      if (this.textContent == "ok") {
        date.contentEditable = false;
        task.contentEditable = false;
        this.textContent = "edit";
      } else {
        date.contentEditable = true;
        task.contentEditable = true;
        this.textContent = "ok";
      }
    });
    btnDel.addEventListener("click", function () {
      todo.remove();
    });
  }
});
