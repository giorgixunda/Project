document.getElementById("addTaskButton").addEventListener('click', function(){
    const inputValue = document.getElementById("myInput").value
    if(inputValue === ""){
        alert("you have to write something to add a list")
        return;
    }
    const newElement = document.createElement("li")
    newElement.textContent = document.getElementById("myInput").value
    document.getElementById("taskList").appendChild(newElement)


    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.classList.add("remove-button")

    newElement.appendChild(removeButton);

    newElement.addEventListener('click', function() {
        newElement.classList.toggle('checked');
    });

    removeButton.addEventListener('click', function() {
        document.getElementById("taskList").removeChild(newElement)
    })

})