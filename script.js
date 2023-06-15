function createTable() {
    //Write your code here
	
let promptValue =prompt('Input number of rows'); 

let table = document.getElementById('myTable');
for (let i = 0; i < promptValue; i++) {
   let Row = table.insertRow(i);
   
for (let j = 0;  j< 3; j++) {
    let data =Row.insertCell(j);
    data.innerText = `Row-${i} ,Column-${j}`;
  
}
}
}

