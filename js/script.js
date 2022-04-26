
//gestisco il bottone start
document.getElementById("start").addEventListener("click", Game);
const startBtn = document.getElementById("start-btn");

// MAIN FUNCTION
function Game() {
    // Genero numeri da 1 a 100
    const title = document.getElementById("title");
    //Creo un grid item per ogni numero 
    const grid = document.querySelector(".grid");
    title.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";
    //Genero i numeri da 1 a 100 con ciclo for
    for (let i = 1; i <= 100 ; i++){
    const newItem =generatorGridItem(i)
    newItem.addEventListener("click" , handleCellClick);
    grid.append(newItem)
    

   }
   //assegno le classi al click del grid item
    function handleCellClick() {
        this.classList.add("active")
    }

}

function generatorGridItem(gridNumber){

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");
gridItem.innerHTML = `<span>${gridNumber}</span>`

return gridItem
}

