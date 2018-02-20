'use strict';

//++++++++++++++++++++++++++++++
// SETTING UP GLOBAL DATA
//++++++++++++++++++++++++++++++

Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.all = []; // This is the main array of objects
Product.viewed = []; // This array is used to prevent duplicates
Product.totalClicks = 0; // Tallies the 25 clicks

// DOM access
Product.container = document.getElementById('image_container');
Product.pics = [document.getElementById('left'),
  document.getElementById('center'),
  document.getElementById('right')
];
Product.list = document.getElementById('productlist');

//++++++++++++++++++++++++++++++
// CONSTRUCTOR
//++++++++++++++++++++++++++++++

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

for (var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++

function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
}

function displayPics() {
  // roll for three random indexes
  while (Product.viewed.length < 6) {
    var rando = makeRandom();
    while (!Product.viewed.includes(rando)) {
      Product.viewed.push(rando);
    }
  }

  for (var i = 0; i < 3; i++) {
    var temp = Product.viewed.shift();
    Product.pics[i].src = Product.all[temp].path;
    Product.pics[i].alt = Product.all[temp].name;
    Product.pics[i].title = Product.all[temp].name;
    Product.all[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target === Product.container) {
    return alert('Be sure to click on an image!');
  }
  // console.log(Product.totalClicks, 'total clicks');
  if (Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    Product.container.style.display = 'none';
    showList();
  }
  Product.totalClicks += 1;
  for (var i = 0; i < Product.names.length; i++) {
    if (event.target.alt === Product.all[i].name) {
      Product.all[i].votes += 1;
      console.log(event.target.alt + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views');
    }
  }
  displayPics();
}

function showList() {
  for (var i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement('li');
    var conversion = (Product.all[i].votes / Product.all[i].views * 100).toFixed(1);
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views  for a click-through conversion rate of ' + conversion + '%';

    if (conversion > 49) {
      liEl.style.color = 'white';
      liEl.style.backgroundColor = 'green';
    }

    if (conversion < 30) {
      liEl.style.color = 'white';
      liEl.style.backgroundColor = 'red';
    }

    Product.list.appendChild(liEl);
  }
}

//++++++++++++++++++++++++++++++
// CODE THAT EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++

displayPics();
Product.container.addEventListener('click', handleClick);