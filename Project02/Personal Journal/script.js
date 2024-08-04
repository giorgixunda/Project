document.getElementById("saveEntryButton").addEventListener("click", saveEntry);
document.getElementById("viewEntriesPage").addEventListener("click", () => switchPage('view'));
document.getElementById("newEntryPage").addEventListener("click", () => switchPage('new'));


function saveEntry() {
    const entryInput = document.getElementById("entryInput");
    const entryText = entryInput.value.trim();
    if (!entryText) return;

    const entry = {
        text: entryText,
        timestamp: new Date().toLocaleString()
    };

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));

    entryInput.value = "";
    loadEntries();
    switchPage('view');
}

function loadEntries() {
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";

    const entries = JSON.parse(localStorage.getItem("entries")) || [];

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";

        const entryText = document.createElement("p");
        entryText.textContent = `${entry.timestamp}: ${entry.text}`;
        entryDiv.appendChild(entryText);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editEntry(index));
        entryDiv.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteEntry(index));
        entryDiv.appendChild(deleteButton);

        entriesDiv.appendChild(entryDiv);
    });
}

function editEntry(index){
    let entries = JSON.parse(localStorage.getItem("entries"));
    const entryText = prompt("Edit your entry:", entries[index].text);
    if (entryText != null && entryText.trim() != ' '){
        entries[index].text = entryText.trim();
        localStorage.setItem("entries", JSON.stringify(entries));
        loadEntries();
    } 
}

function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem("entries"));
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));
    loadEntries();
}

function switchPage(page) {
    const newEntrySection = document.getElementById("newEntrySection");
    const entriesSection = document.getElementById("entriesSection");

    if (page == "new") {
        newEntrySection.style.display = "block";
        entriesSection.style.display = "none";
    } else if (page == "view") {
        newEntrySection.style.display = "none";
        entriesSection.style.display = "block";
        loadEntries();
    }
}

window.addEventListener("DOMContentLoaded", loadEntries);

