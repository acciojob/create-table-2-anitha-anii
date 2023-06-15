function createTable() {

  let numRows = prompt('Input number of rows');
  let numCols = prompt('Input number of columns');

  let table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear existing table contents

  for (let i = 0; i < numRows; i++) {
    let row = table.insertRow(i);
    
    for (let j = 0; j < numCols; j++) {
      let cell = row.insertCell(j);
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
}

