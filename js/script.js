
//gestisco il bottone start
document.getElementById("start").addEventListener("click", Game);
const startBtn = document.getElementById("start-btn");

// MAIN FUNCTION
function Game() {
    //Generare 16 bombe
    const bombsNumber = 16;
    const bombsArray = generateRndBombs(bombsNumber,100)
    const safeCells = [] ;
    const maxNumber = 100;

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
    
    for (let i = 1; i <= 100; i++) {
        const newItem = generatorGridItem(i, 10);

        newItem.addEventListener("click", handleCellClick);
        grid.append(newItem)
    }

    function generateRndBombs(maxLimit) {
        const numbersArray = [];
        while (numbersArray.length < 16) {
            const randomNumber = getRndInteger (1, maxLimit)
            if ( !numbersArray.includes(randomNumber)) {
                numbersArray.push(randomNumber);
            }
        }
        return numbersArray
    }
    
    const generateArray = generateRndBombs (16 ,100);
    console.log(generateArray);
    
    function getRndInteger(min,max) {
        return Math.floor(Math.random() * (max - min +1) ) + min;
    }
   //assegno le classi al click del grid item
    function handleCellClick() {
        //prelevare il numero cliccato
        const clickNumber = parseInt(this.querySelector(".selectNumber").textcontent);
        console.log(clickNumber);
        
        //la cella diventa rossa
        if ( bombsArray.includes(clickNumber) ) {
            this.classList.add("red");
            alert("Hai perso!");
        }else {
            //la cella diventa azzurra
        this.classList.add("active");
        safeCells.push(clickNumber);
        console.log(safeCells);
        }

}

function generatorGridItem(gridNumber){

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");
gridItem.innerHTML = `<span class ="selectNumber">${gridNumber}</span>`

return gridItem
}

}

