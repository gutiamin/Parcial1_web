/*let data = [
  {
    last_lane: "Withams",

    first_name: "Winona",

    email: "wwithams1@ibm.com",

    photo: "http://dummyimage.com/161x166.bmp/cc0000/ffffff",
  },
  {
    last_lane: "Streatfield",

    first_name: "Northrup",

    email: "nstreatfield2@macromedia.com",

    photo: "http://dummyimage.com/195x201.png/ff4444/ffffff",
  },
  {
    last_lane: "Elderlane",

    first_name: "Elder",

    email: "elane@macromedia.com",

    photo: "http://dummyimage.com/195x201.png/ff4444/ffffff",
  },
  {
    last_lane: "Cloverfield",

    first_name: "Andrew",

    email: "clovandr@macromedia.com",

    photo: "http://dummyimage.com/195x201.png/ff4444/ffffff",
  },
  {
    last_lane: "Willow",

    first_name: "Dog",

    email: "willdog@macromedia.com",

    photo: "http://dummyimage.com/195x201.png/ff4444/ffffff",
  },
  {
    last_lane: "Daws",

    first_name: "Nari",

    email: "ndaws0@dell.com",

    photo: "http://dummyimage.com/155x119.jpg/ff4444/ffffff",
  },
];

console.log(data);

let tableBody = document.getElementById("people");
let rowIndex = 1;

data.forEach((obj) => {
  let tableRow = document.createElement("tr");
  let tableElement1 = document.createElement("td");
  let textTableElement1 = document.createTextNode(obj.last_lane);
  tableElement1.appendChild(textTableElement1);
  tableRow.appendChild(tableElement1);
  let tableElement2 = document.createElement("td");
  let textTableElement2 = document.createTextNode(obj.first_name);
  tableElement2.appendChild(textTableElement2);
  tableRow.appendChild(tableElement2);
  let tableElement3 = document.createElement("td");
  let textTableElement3 = document.createTextNode(obj.email);
  tableElement3.appendChild(textTableElement3);
  tableRow.appendChild(tableElement3);
  let tableElement4 = document.createElement("td");
  let textTableElement4 = document.createTextNode(obj.photo);
  tableElement4.appendChild(textTableElement4);
  tableRow.appendChild(tableElement4);
  let tableElement5 = document.createElement("td");
  let boton = document.createElement("button");
  boton.setAttribute("type", "button");
  boton.setAttribute("class", "btn btn-dark");
  boton.setAttribute("onclick", "eliminarFila()");
  let textBoton = document.createTextNode("Eliminar");
  boton.appendChild(textBoton);
  tableElement5.appendChild(boton);
  tableRow.appendChild(tableElement5);
  tableRow.setAttribute("id", rowIndex);
  tableBody.appendChild(tableRow);
  rowIndex++;
});

const getCellValue = (tr, idx) =>
  tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) =>
  ((v1, v2) =>
    v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
      ? v1 - v2
      : v1.toString().localeCompare(v2))(
    getCellValue(asc ? a : b, idx),
    getCellValue(asc ? b : a, idx)
  );

// do the work...
document.querySelectorAll("th").forEach((th) =>
  th.addEventListener("click", () => {
    const table = th.closest("table");

    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(
        comparer(
          Array.from(th.parentNode.children).indexOf(th),
          (this.asc = !this.asc)
        )
      )
      .forEach((tr) => table.appendChild(tr));
  })
);

function enviar() {
  let table = document.getElementById("myTable");

  let row = table.insertRow(1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = document.getElementById("last_lane").value;
  cell2.innerHTML = document.getElementById("first_name").value;
  cell3.innerHTML = document.getElementById("email").value;
  cell4.innerHTML = document.getElementById("photo").value;
  let boton = document.createElement("button");
  boton.setAttribute("type", "button");
  boton.setAttribute("class", "btn btn-dark");
  boton.setAttribute("onclick", "eliminarFila()");
  let textBoton = document.createTextNode("Eliminar");
  boton.appendChild(textBoton);
  cell5.appendChild(boton);
}

let trs = document.getElementsByTagName("tr");

trs.forEach((row, index) => {
  if (index === 0) {
  } else {
    let eliminarFila = row.insertCell(4);
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "btn btn-primary");
    boton.setAttribute("onclick", "eliminarFila()");
    let textBoton = document.createTextNode("Eliminar");
    boton.appendChild(textBoton);
    eliminarFila.innerHTML = boton;
  }
});

function eliminarFila() {
  document.getElementById("myTable").deleteRow(rowIndex);
}*/

const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
let objectArray = new Array();
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    objectArray = response;
    // let countEvent = 1;
    // let tableBodyEvents = document.getElementById("events");

    // let arrayEvent = new Array();
    // arrayEvent.push(["peanuts", 0, 0, 0, 0]);

    // objectArray.forEach((obj) => {
    //   // console.log(obj.squirrel);
    //   let tableRow = document.createElement("tr");
    //   let tableHeader = document.createElement("th");
    //   tableHeader.setAttribute("scope", "row");
    //   let textTableHeader = document.createTextNode(countEvent);
    //   tableHeader.appendChild(textTableHeader);
    //   tableRow.appendChild(tableHeader);
    //   let tableEvent = document.createElement("td");
    //   let textEvent = document.createTextNode(obj.events);
    //   tableEvent.appendChild(textEvent);
    //   tableRow.appendChild(tableEvent);
    //   let tableSquirrel = document.createElement("td");
    //   let textSquirrel = document.createTextNode(obj.squirrel);
    //   if (obj.squirrel === true) {
    //     tableRow.setAttribute("class", "table-danger");
    //   }
    //   tableSquirrel.appendChild(textSquirrel);
    //   tableRow.appendChild(tableSquirrel);
    //   tableBodyEvents.appendChild(tableRow);
    //   countEvent++;
    // });
  });

function mostrarTacos() {
  let titulo = document.getElementById("titulo");
  let textTitulo = document.createTextNode("Tacos");
}
