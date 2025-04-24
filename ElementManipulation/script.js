const divElement=document.querySelector(".container")
console.log(divElement)

const paraElement=document.createElement("p")
paraElement.textContent="Sab changa si?"
paraElement.classList.add("para")
// paraElement.style.fontSize = 20+"px"
// divElement.appendChild(paraElement)

/*
Ways through which we can add elements:
1)appendchild(var) --> Adds at last
2)append(ele,var) --> Adds at last
3)prepend(ele,var) --> Adds at first
4)before(ele,var) --> Adds before selected element
5)after(ele,var) --> Adds after selected element
*/

// divElement.append("Sab changa si?",paraElement)
// divElement.prepend("Sab changa si?",paraElement)
// divElement.before(paraElement)
divElement.after(paraElement)
// divElement.remove()
// paraElement.remove()