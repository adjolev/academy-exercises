let btn = document.getElementById("button");

let h1 = document.getElementById("h1");
let table = document.getElementById("table");
table.style.border = "5px solid black";
table.style.display = "none";
let count = 1;

btn.addEventListener("click", function () {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", `https://swapi.dev/api/people/${count}/`);
  myRequest.onload = function () {
    let data = JSON.parse(myRequest.responseText);
    h1.textContent = `You got:  ${data.name}`;
    let personData = [data];
    createTable(personData);
    table.style.display = "table";
  };
  myRequest.send();

  count++;
  if (count > 83) {
    button.style.display = "none";
  }
});

function createTable(personData) {
  for (data of personData) {
    let row = document.createElement("tr");
    row.style = "3px solid black";
    let cell = document.createElement("td");
    cell.style.border = "1px solid black";
    let cell1 = document.createElement("td");
    cell1.style.border = "1px solid black";
    let cell2 = document.createElement("td");
    cell2.style.border = "1px solid black";
    let cell3 = document.createElement("td");
    cell3.style.border = "1px solid black";
    let cell4 = document.createElement("td");
    cell4.style.border = "1px solid black";
    cell.textContent = data.name;
    cell1.textContent = data.height;
    cell2.textContent = data.mass;
    cell3.textContent = data.eye_color;
    cell4.textContent = data.hair_color;
    table.appendChild(row);
    table.appendChild(cell);
    table.appendChild(cell1);
    table.appendChild(cell2);
    table.appendChild(cell3);
    table.appendChild(cell4);
  }
}
