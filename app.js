const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
let objectArray = new Array();
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    objectArray = response;
  });

function mostrarBurgers() {
  let textTitulo = document.createTextNode("Burgers");
  document.getElementById("tituloLista").appendChild(textTitulo);
  let burgersList = objectArray.find((n) => n.name === "Burguers");
  let productsList = burgersList.products;
  let description;
  let image;
  let name;
  let price;
  productsList.forEach((n) => {
    description = n.description;
    image = n.image;
    name = n.name;
    price = n.price;
    //Ingresar datos al card
  });
}

function mostrarTacos() {
  let textTitulo = document.createTextNode("Tacos");
  document.getElementById("tituloLista").appendChild(textTitulo);
  let tacosList = objectArray.find((n) => n.name === "Tacos");
  let productsList = tacosList.products;
  let description;
  let image;
  let name;
  let price;
  productsList.forEach((n) => {
    description = n.description;
    image = n.image;
    name = n.name;
    price = n.price;
    //Ingresar datos al card
  });
}

function mostrarSalads() {
  let textTitulo = document.createTextNode("Salads");
  document.getElementById("tituloLista").appendChild(textTitulo);
  let saladsList = objectArray.find((n) => n.name === "Salads");
  let productsList = saladsList.products;
  let description;
  let image;
  let name;
  let price;
  productsList.forEach((n) => {
    description = n.description;
    image = n.image;
    name = n.name;
    price = n.price;
    //Ingresar datos al card
  });
}

function mostrarDesserts() {
  let textTitulo = document.createTextNode("Desserts");
  document.getElementById("tituloLista").appendChild(textTitulo);
  let dessertsList = objectArray.find((n) => n.name === "Desserts");
  let productsList = dessertsList.products;
  let description;
  let image;
  let name;
  let price;
  productsList.forEach((n) => {
    description = n.description;
    image = n.image;
    name = n.name;
    price = n.price;
    //Ingresar datos al card
  });
}

function mostrarDrinks() {
  let textTitulo = document.createTextNode("Drinks");
  document.getElementById("tituloLista").appendChild(textTitulo);
  let drinksList = objectArray.find((n) => n.name === "Drinks");
  let productsList = drinksList.products;
  let description;
  let image;
  let name;
  let price;
  productsList.forEach((n) => {
    description = n.description;
    image = n.image;
    name = n.name;
    price = n.price;
    //Ingresar datos al card
  });
}
