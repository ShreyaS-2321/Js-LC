const button = document.querySelectorAll(".box")
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener("click",function(color){
        if(color.target.id==="box1"){
            body.style.backgroundColor = "aliceblue"
        }
        if(color.target.id==="box2"){
            body.style.backgroundColor = "#ffedd7"
        }
        if(color.target.id==="box3"){
            body.style.backgroundColor = "lavenderblush"
        }
        if(color.target.id==="box4"){
            body.style.backgroundColor = "whitesmoke"
        }
        if(color.target.id==="box5"){
            body.style.backgroundColor = "honeydew"
        }
    })
})