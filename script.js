let ListContainer = document.getElementById(`List-Container`);
let InputBox = document.getElementById(`Input-box`);
let button =document.getElementById(`button`)

button.onclick = function addTask() {
    if (InputBox.value === "") {
        alert("You must insert something!")
    }
    else {
        let li = document.createElement(`li`);
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement(`span`);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";

}



ListContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)


function saveData() {
    localStorage.setItem(`data`, ListContainer.innerHTML);
}


function showTask(){
    ListContainer.innerHTML =localStorage.getItem("data");
}
showTask();