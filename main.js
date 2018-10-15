//Handle Pixel Click

let container = document.querySelector(".container")
function handleClick(event){
   event.target.style.backgroundColor = chosenColor
}
container.addEventListener("click", handleClick)
//Handle Color Selection
let colors = document.querySelector(".colors")
function handleColorSelection(event){
   chosenColor = event.target.classList[1]

}
colors.addEventListener("click", handleColorSelection)
for(let i = 0;i < 20;i++){
   let block = document.createElement("div")
   let tr = document.createElement("tr")
   block.className = "block"
   container.appendChild(block)
   block.appendChild(tr)

   for(let j = 0; j < 50; j++){
     let td = document.createElement("td")
     tr.appendChild(td)
     td.className = "pixel"

   }

}
