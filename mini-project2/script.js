const barElement = document.querySelector(".bar")
const hideElement =document.querySelector(".hide")
const closeElement = document.querySelector(".close")
barElement.addEventListener("click",()=>{
    hideElement.style.display="block"
})
closeElement.addEventListener("click",()=>{
    hideElement.style.display="none"
})