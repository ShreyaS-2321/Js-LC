const btnElement = document.querySelector(".btn");
const inputElement = document.querySelector("#input-field")
const taskElement = document.querySelector(".list-item")
btnElement.addEventListener("click",()=>{
    if(inputElement.value===""){
        alert("Please enter a task first")
    }
    else{
        let listElement = document.createElement("li")
        listElement.textContent=inputElement.value
        taskElement.appendChild(listElement)

        let spanElement = document.createElement("span")
        spanElement.textContent="\u00d7"
        listElement.appendChild(spanElement)
    }
    inputElement.value=""
    saveElement()
})

taskElement.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("done")
        saveElement()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveElement()
    }
})

function saveElement(){
    localStorage.setItem("task",taskElement.innerHTML)
}

function getElement(){
    taskElement.innerHTML=localStorage.getItem("task")
}

getElement()