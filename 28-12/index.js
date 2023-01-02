let colors = [
  "LightYellow",
  "Lavender",
  "GreenYellow",
  "yellow",
  "salmon",
  "pink",
  "cyan",
  "orange",
  "coral",
  "DodgerBlue",
];

// Create table element
let table = document.createElement("table");

// Array to show numbers
let arr = [];
function makeArr() {
  arr = [];
  for (let i = 1; i <= 100; i++) {
    arr[i - 1] = i;
  }
}
makeArr();

// Change array function
function changeArr(n) {
  makeArr();
  arr = arr.map((item) => {
    if (item % n === 0) return "*";
    else return item;
  });
  makeTable();
}

// Make table elements(tr, td)
function makeTable() {
  table.innerHTML = "";
  for (let i = 1; i <= arr.length; i++) {
    let tr = document.createElement("tr");
    if (i % 10 === 1) {
      table.append(tr);
    }
    let td = document.createElement("td");
    td.style.cssText = `
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid blue;
        cursor: pointer;
        text-align: center;
        font-weight: 700;
        background-color: ${colors[i % 10]}
    `;
    td.setAttribute("onclick", `changeArr(${i})`);
    td.innerText = arr[i - 1];
    table.lastElementChild.append(td);
  }
}
makeTable();

// On button click
function buttonClick() {
  makeArr();
  makeTable();
}

// Make button to clear array (back to origin)
let btn = document.createElement("button");
btn.setAttribute("onclick", "buttonClick()");
btn.style.cssText = `
  border: none;
  margin-top: 15px;
  padding: 5px 15px;
  text-align: center;
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  cursor:pointer;
`;
btn.textContent = "Original numbers";
document.body.append(btn);

// Append table to body
document.body.prepend(table);

// CSS Styles
document.querySelector("*").style.userSelect = "none";
table.style.borderSpacing = "5px";
