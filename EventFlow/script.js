const outerEle = document.querySelector(".outer")
const btnEle = document.querySelector(".btn")
const linkEle = document.getElementById("link")

// outerEle.addEventListener("click",(e)=>{
//     console.log("You clicked outer div!")
//     e.stopPropagation()
// },true)

// btnEle.addEventListener("click",()=>{
//     console.log("Button Clicked!")
// },true)

linkEle.addEventListener("click",(e)=>{
    console.log("You clicked on Google link")
    e.preventDefault()
},false)
