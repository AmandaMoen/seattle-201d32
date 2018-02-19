'use strict';

// array to store the objects
Goat.allGoats = [];

// make an object
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Kissing goats', 'img/kissing-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Jumping goat', 'img/jumping-goat.jpg');
new Goat('Toothy goat', 'img/toothy-goat.jpg');
new Goat('Tongue goat', 'img/tongue-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');

var goatPic = document.getElementById('goat-pic');

// Let's write a function to randomly display one of the pictures
function randomGoat() {
  // We need to access the <img> element in the DOM
  // Select a random goat from the array of goats
  var randomGoat = Math.floor(Math.random() * Goat.allGoats.length);
  // console.log(Goat.allGoats[randomGoat]);

  // Assign the src, alt, and title attributes to the <img> element
  goatPic.src = Goat.allGoats[randomGoat].filepath;
  goatPic.alt = Goat.allGoats[randomGoat].name;
  goatPic.title = Goat.allGoats[randomGoat].name;

  console.log(Goat.allGoats[randomGoat].name, 'is being displayed');
}

randomGoat();

// Now we need to listen for clicks on the goat and then display a new goat
goatPic.addEventListener('click', randomGoat);