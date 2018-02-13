'use strict';

// Demo for objects to constructors

// var jimmy = {
//   course: '201d32',
//   firstName: 'Jimmy',
//   lastInitial: 'C',
//   faveNumber: 24,
//   isCodeNinja: true,
//   intro: function() {
//     console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// };

// I would need 250 lines of code to model our class this way
// (25 students * 10 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Constructor Function

// Then, to make Jimmy, all we would need is this:

// What if I wanted to make an array of students?
// var mahClass = [jeff, susan, miguel];
// This is annoying, so let's push from the constructor!