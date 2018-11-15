//get the form
const form  = document.forms['sizePicker'];
//get the table
const tbl = document.getElementById('pixelCanvas');


function changeColor(evt){
  var color = document.getElementById('colorPicker').value;
  evt.target.style.backgroundColor = color;
}


function gridListener(evt){
//prevent form default action when submitted
  evt.preventDefault()


  //form.addEventListener('submit', gridListener);
//check to see if grid already exists
  if (tbl.tBodies.length === 1) {
    //get table cell
    let cell = document.querySelectorAll('td')

    //returns a nodeList of all td elements
    //var cell = document.querySelectorAll('td')
    //loop through all table cells and reset backgroundColor
    //for ( let x = 0; x < document.getElementsByTagName('td').length; x++){
      //document.getElementsByTagName('td')[x].style.backgroundColor = //'transparent'


    //}
    //remove the grid
      tbl.innerHTML = '';
    //for (let x = 0; x < cell.length; x++){
      //cell[x].style.backgroundColor = 'transparent'

    //}

  } else {
    //if grid doesn't exist create it
    //get grid Height
    let gridHeight = Number(form.inputHeight.value);
    //get grid Width
    let gridWidth = Number(form.inputWidth.value);
    //loop over gridWidth to insert rows to table
    for (let row_index = 0; row_index < gridWidth; row_index++) {
          var  row = tbl.insertRow(row_index);
          //loop over gridHeight to insert cells in rows
        for ( let column_index = 0; column_index < gridHeight; column_index++) {
           var column = row.insertCell(column_index);

        }
    }
    //get table cell
    let cell = document.querySelectorAll('td');
    //loop through and attach listener to every cell
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click',changeColor,false);
    }

  }

}


function makeGrid(){

  form.addEventListener('submit', gridListener);

}

makeGrid();
