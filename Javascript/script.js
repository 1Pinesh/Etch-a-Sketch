let valueChange

// Title container
const title_con =  document.createElement("div");
title_con.classList.add("title-con");

// Title
const title = document.createElement("h1");
title.classList.add("title")
title.textContent = "Etch-a-Sketch"
title.style.color = "#F03134"
title.style.fontSize = "70px"

title_con.appendChild(title)

// Making a grid-container
const table_con = document.createElement("div");
const grid_con = document.createElement("div");
table_con.classList.add("table-con");
table_con.appendChild(grid_con);

// give the grid-con an id
grid_con.classList.add("grid-con");

//giving the container 500 width and height
grid_con.style.width = "500px";
grid_con.style.height = "500px";

// input-container
const input_con =  document.createElement("div");
input_con.classList.add("input-con");

// Making a input & Button
const input_box = document.createElement("input");
const input_btn = document.createElement("button");
input_btn.textContent = "Apply";
input_box.id = "input_box";
input_btn.id = "inputBtn";
input_con.appendChild(input_box);
input_con.appendChild(input_btn);

// adding the grid-con,input-box and button into the html file
 document.body.appendChild(title_con)
 document.body.appendChild(input_con);
 document.body.appendChild(table_con);


// Functon multiple cells
function multipleCells(number) {
    grid_con.textContent = ""
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

// handle user input and create grid
function inputHandle() {
    valueChange = parseInt(input_box.value);
    if (!isNaN(valueChange) && valueChange > 0) {
        multipleCells(valueChange)
    }
}

// change the grid to the user amout
input_btn.addEventListener("click",inputHandle);

// default grid of 16
multipleCells(16)