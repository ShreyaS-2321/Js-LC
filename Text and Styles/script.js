const btnElement=document.querySelector(".btn")
const bodyElement=document.querySelector("body")

const divElement = document.querySelector(".intro")

// console.log(divElement.innerHTML)
// console.log(divElement.outerHTML)
// console.log(divElement.innerText)
// console.log(divElement.textContent)

divElement.innerText="What are you doing?"

// bodyElement.style.backgroundColor="beige"
// bodyElement.style.fontFamily="Sans-serif"

// console.log(btnElement)

// btnElement.style.backgroundColor="black"
// btnElement.style.color="white"
// btnElement.style.borderRadius=4+"px"

//classList

// btnElement.classList.add("btn1")
// btnElement.classList.remove("btn1")

//Attributes

// let att= divElement.getAttribute("class")
// console.log(att)

divElement.setAttribute("id","intro2")
// console.log(divElement.outerHTML)

let att2=divElement.hasAttribute("class")
console.log(att2)

divElement.removeAttribute("id")
console.log(divElement.outerHTML)






