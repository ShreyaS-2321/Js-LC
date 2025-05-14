const btnElement=document.querySelector(".btn");
console.log(btnElement)

btnElement.onclick = function(){
    console.log("Shreya");
}

btnElement.addEventListener("click",(e)=>{
    btnElement.classList.add("btn1")
},false)

// function click1(){
//     console.log("click 1")
// }

// function click2(){
//     console.log("click 2")
// }

// btnElement.addEventListener("click",click1)
// btnElement.addEventListener("click",click2)

// btnElement.removeEventListener("click",click2)