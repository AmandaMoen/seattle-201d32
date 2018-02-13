'use strict';

// Demo for objects to constructors

var jimmy = {
  course: '201d32',
  firstName: 'Jimmy',
  lastInitial: 'C',
  faveNumber: 25,
  isCodeNinja: true,
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 250 lines of code to model our class this way
// (25 students * 10 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Constructor Function

function Student(firstName, lastInitial, faveNumber) {
  this.course = '201d32';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  mahClass.push(this);
}

Student.prototype.intro = function() {
  console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
};

// What if I wanted to make an array of students?
var mahClass = [];

// Then, to make Jimmy, all we would need is this:
new Student('Jimmy', 'C', 25);
new Student('Amanda', 'M', 86);
new Student('Lacy', 'H', 3);
new Student('Collin', 'M', 13);

// 35 lines to make everyone! That's way less than 250!!!
console.table(mahClass);

// This is annoying, so let's push from the constructor!