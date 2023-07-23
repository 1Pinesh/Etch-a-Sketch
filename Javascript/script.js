// Making a container
const grid_con = document.createElement("div");
// give the grid-con an id
grid_con.classList.add("grid-con");
// adding the grid-con into the html file
document.body.appendChild(grid_con)

// Functon multiple cells
function multipleCells(number) {
    const squareNums = number * number
//make a loop that will keep making cells 
    for(let i = 0; i <= squareNums ; i ++) {
        const newCell = document.createElement("div")
        grid_con.appendChild(newCell)
    }
}


// Call mulipleCells
multipleCells(16);