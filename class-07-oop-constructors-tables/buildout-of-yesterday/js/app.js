'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pikePlace = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the avg cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total = incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  totalCookiesSoldPerDay: 0,
  locationName: 'First and Pike',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('pike');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
};

pikePlace.render();