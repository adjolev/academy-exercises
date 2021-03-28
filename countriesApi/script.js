let text = document.getElementById("inputText");
let submit = document.getElementById("submit");
let resultDiv = document.getElementById("resultsDiv");

let baseUrl = "https://restcountries.eu/rest/v2/name/";

let countryColumns = ["flag", "name", "population", "capital", "area"];

function Countries(data) {
  this.flag = data.flag;
  this.name = data.name;
  this.population = data.population;
  this.capital = data.capital;
  this.area = data.area;
}

function createTable(data, countryColumns) {
  resultDiv.innerHTML = "";
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  let tableHead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  countryColumns.forEach((column) => {
    let th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  let tableBody = document.createElement("tbody");
  data.forEach((item) => {
    let tRow = document.createElement("tr");
    Object.keys(item).forEach((key) => {
      let td = document.createElement("td");
      if (key === "flag") {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", item[key]);
        imgTag.setAttribute("width", "40px");
        imgTag.setAttribute("src", item[key]);
        td.appendChild(imgTag);
      } else {
        td.textContent = item[key];
      }
      tRow.appendChild(td);
    });
    tableBody.appendChild(tRow);
  });
  table.appendChild(tableBody);
  resultDiv.appendChild(table);
}

const getCountries = () => {
  fetch(`${baseUrl}${text.value}`)
    .then((res) => res.json())
    .then((response) => {
      let countries = response.map((country) => new Countries(country));
      createTable(countries, countryColumns);
      console.log(countries);
    });
};

submit.addEventListener("click", () => {
  getCountries();
});
