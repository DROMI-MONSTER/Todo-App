
const createButtonRef = document.getElementById('createButton');
const todoInputRef = document.getElementById('todoInput');
const todoContainerRef = document.getElementById('todoContainer');
let uniqueId = 1;
let elementToBeUpdated;



createButtonRef.addEventListener('click', function () {
    if (createButtonRef.innerText === "Create") {
        const value = todoInputRef.value;
        if (value === "") {
            alert("please enter something")
            return;
        }
        const li = document.createElement('li');
        li.id = `todoId${uniqueId}`
        li.innerHTML = `
        <div class="valueContainer">
            <div class="false"></div>
            <p>${value}</p>
        </div>
        <div class="buttonContainer">
            <button class="updateButton">Update</button>
            <button class="deleteButton" >Delete</button>
        </div>`

        todoContainerRef.appendChild(li);
        uniqueId++;
        todoInputRef.value = ""
    }
    else if (createButtonRef.innerText === "Save") {
        const value = todoInputRef.value;
        elementToBeUpdated.querySelector("p").innerText = value;
        createButtonRef.innerText = "Create"
        todoInputRef.value = ""
        createButtonRef.style.backgroundColor = "#4361ee"
    }
    elementToBeUpdated = "";
})



todoContainerRef.addEventListener('click', (e) => {
    if (e.target.className === "deleteButton") {
        e.target.parentNode.parentNode.remove()
    }
    else if (e.target.className === "updateButton") {
        createButtonRef.innerText = "Save";
        createButtonRef.style.backgroundColor = "#52d152bf"
        elementToBeUpdated = e.target.parentNode.parentNode;
        todoInputRef.value = elementToBeUpdated.querySelector("p").innerText;
    }
})

todoContainerRef.addEventListener('click', (e) => {
    if (e.target.className === "true") {
        e.target.className = "false";
        e.target.parentNode.parentNode.querySelector("p").style.fontStyle = "normal"
        e.target.parentNode.parentNode.querySelector("p").style.textDecoration = "none"
        e.target.parentNode.parentNode.style.backgroundColor = "white"
    }
    else if (e.target.className === "false") {
        e.target.className = "true"
        e.target.parentNode.parentNode.querySelector("p").style.fontStyle = "italic"
        e.target.parentNode.parentNode.querySelector("p").style.textDecoration = "line-through"
        e.target.parentNode.parentNode.style.backgroundColor = "#52d152bf"
    }
})




