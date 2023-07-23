
// Making a container
const grid_con = document.createElement("div");

// give the grid-con an id
grid_con.classList.add("grid-con");

//giving the container 500 width and height
grid_con.style.width = "500px";
grid_con.style.height = "500px";

// Making a input & Button
const input_box = document.createElement("input");
const input_btn = document.createElement("button");
input_box.id = "input_box";
input_btn.ix = "inputBtn";

// adding the grid-con,input-box and button into the html file
 document.body.appendChild(input_box);
 document.body.appendChild(input_btn);
 document.body.appendChild(grid_con);




// Functon multiple cells
function multipleCells(number) {
    // this will give each cell 
    const cellSize = 500/number;
    // create give the amount of cells needed (e.g 16*16 = 256 divs)
    const squareNums = number * number;
   
    // put the current number on the input
    input_box.placeholder = number

//make a loop that will keep making cells 
    for(let i = 0; i <= squareNums ; i ++) {
        // Make a new cell
        const newCell = document.createElement("div");
        // give the cells a class 
        newCell.classList.add("cells");

        // give cell width and height
        newCell.style.width  = cellSize + "px";
        newCell.style.height = cellSize + "px";

        // give new cell margin and padding
        newCell.style.padding = "0px";
        newCell.style.margin = "0px";

        // add the cells into container
        grid_con.appendChild(newCell);
        //hover effect 
       
        // eventlisner turn the cell black if the cell is clicked
        newCell.addEventListener("click", ()=> {
            newCell.style.background = "black";
        })


    }
}


// Call mulipleCells
multipleCells(16);