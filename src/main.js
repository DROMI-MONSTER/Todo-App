
const createButtonRef = document.getElementById('createButton');
const todoInputRef = document.getElementById('todoInput');
const todoContainerRef = document.getElementById('todoContainer');
let elementToBeUpdated;


createButtonRef.addEventListener('click', function () {
    const value = todoInputRef.value;
    console.log(value);
    const li = document.createElement('li');
    const buttonsDiv = document.createElement('div');
    const TextParaTag = document.createElement('p');
    const updateButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    if (createButtonRef.innerText === "Create") {

        if (value === "") {
            alert("enter something please")
            return;
        }

        let completed = true;

        updateButton.id = "updateButton"
        deleteButton.id = "deleteButton"
        updateButton.innerText = "Update"
        deleteButton.innerText = "Delete"
        updateButton.addEventListener("click", function () {
            todoInputRef.value = TextParaTag.innerText;
            createButtonRef.innerText = "Save";
            elementToBeUpdated = TextParaTag;
            createButtonRef.style.backgroundColor = "#7dbc77"

        })
        deleteButton.addEventListener("click", function () {
            li.remove();
        })
        buttonsDiv.appendChild(updateButton)
        buttonsDiv.appendChild(deleteButton)

        TextParaTag.innerText = value;
        li.appendChild(TextParaTag)
        li.appendChild(buttonsDiv)
        TextParaTag.addEventListener('click', function () {
            TextParaTag.style.fontStyle = completed ? "italic" : "normal";
            TextParaTag.style.textDecoration = completed ? "line-through" : "none";
            li.style.backgroundColor = completed ? "#8FE388" : "white";
            completed = !completed;
        });

        todoContainerRef.appendChild(li);
        todoInputRef.value = '';
    }
    else if (createButtonRef.innerText === "Save") {
        elementToBeUpdated.innerText = value;
        createButtonRef.innerText = "Create";
        createButtonRef.style.backgroundColor = "#4361ee"
        todoInputRef.value = '';
    }
    else {
        console.log("error error everywhere");
    }


});


