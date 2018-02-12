'use strict';

// Object literal notation

// Let's model some Seattle beaches in code
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thor\'s Day', 'Friday', 'Saturday', 'Sunday'];

var alki = {
  name: 'Alki',
  neighborhood: 'West Seattle',
  seagullCount: [6789, 456, 754, 934859, 2, 5674, 7564],
  render: function() {
    var ulEl = document.getElementById('alkibeach');
    for (var i = 0; i < this.seagullCount.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = days[i] + ': ' + this.seagullCount[i];
      // append it to the DOM
      // parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
  }
};

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Ballard',
  seagullCount: [6, 5, 9, 2, 9567, 6, 2],
  render: function() {
    var ulEl = document.getElementById('gg');
    for (var i = 0; i < this.seagullCount.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = days[i] + ': ' + this.seagullCount[i];
      // append it to the DOM
      // parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
  }
};

var edmondsBeach = {
  name: 'Edmonds Beach',
  neighborhood: 'Edmonds',
  seagullCount: [23, 23, 23, 23, 23, 22, 22],
  render: function() {
    var ulEl = document.getElementById('edmonds');
    for (var i = 0; i < this.seagullCount.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = days[i] + ': ' + this.seagullCount[i];
      // append it to the DOM
      // parent.appendChild(child)
      ulEl.appendChild(liEl);
    }
  }
};

alki.render();
goldenGardens.render();
edmondsBeach.render();
___