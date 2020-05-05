'use strict';

// Store hours for ALL locations
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
  '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'
];

function Store(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

// Prototype to calculate the total amount of cookies bought each hour
Store.prototype.cookiesPerHr = function () {
  var cookieArr = [];

  for (var i = 0; i < storeHours.length; i++) {

    var custPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    cookieArr.push(Math.ceil(custPerHr * this.avgCookies));
  }

  return cookieArr;
};

// Prototype to display the store hours as the header row
Store.prototype.renderHrs = function () {
  var tBody = document.getElementById('salesTable');
  var hRow = document.createElement('tr');
  var tableH = document.createElement('th');

  tableH.textContent = '';
  hRow.appendChild(tableH);

  for (var i = 0; i < storeHours.length; i++) {
    tableH = document.createElement('th');
    tableH.textContent = storeHours[i];
    hRow.appendChild(tableH);
  }

  tBody.appendChild(hRow);
};

// Prototype to render the sales calculations to the page
Store.prototype.renderSales = function () {
  var cookies = this.cookiesPerHr();
  var tBody = document.getElementById('salesTable');
  var tRow = document.createElement('tr');
  var tableD = document.createElement('td');

  tableD.textContent = this.storeName;
  tRow.appendChild(tableD);

  for (var i = 0; i < storeHours.length; i++) {
    tableD = document.createElement('td');
    tableD.textContent = (cookies[i]);
    tRow.appendChild(tableD);
  }

  tBody.appendChild(tRow);
};




// construct new Store object and test all prototypes
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

// console.log(seattle.cookiesPerHr()); // WORKING
console.log(Store.prototype.renderHrs());
console.log(seattle.renderSales());
console.log(tokyo.renderSales());
console.log(dubai.renderSales());
console.log(paris.renderSales());
console.log(lima.renderSales());





// function customersPerHr(min, max) {

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// SEATTLE STORE
// var seattle = {

//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,

//   cookiesPerHr: function () {
//     var customers = customersPerHr(this.minCust, this.maxCust);

//     return Math.floor(customers * this.avgCookies);
//   },

//   cookieTotal: function () {
//     var cookies = [];
//     var sum = 0;

//     for (var i = 0; i < storeHours.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHr();

//       cookies.push(hourlyCookies);
//       sum += hourlyCookies;
//     }

//     cookies.push(sum);

//     return cookies;
//   },

//   render: function () {
//     var parent = document.getElementById('seattle');
//     var cookieArray = this.cookieTotal();

//     for (var i = 0; i < cookieArray.length; i++) {
//       var li = document.createElement('li');

//       li.textContent = `${storeHours[i]} ${cookieArray[i]} cookies`;
//       parent.appendChild(li);
//     }
//   }
// };

// seattle.render();

// // TOKYO STORE
// var tokyo = {

//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,

//   customersPerHr: function() {
//     var min = this.minCust;
//     var max = this.maxCust;

//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },

//   cookiesPerHr: function() {
//     var customers = this.customersPerHr();

//     return Math.floor(customers * this.avgCookies);
//   },

//   cookieTotal: function() {
//     var cookies = [];
//     var sum = 0;

//     for (var i = 0; i < hours.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHr();

//       cookies.push(hourlyCookies);
//       sum += hourlyCookies;
//     }

//     cookies.push(sum);

//     return cookies;
//   },

//   render: function() {
//     var parent = document.getElementById('tokyo');
//     var cookieArray = this.cookieTotal();

//     for (var i = 0; i < cookieArray.length; i++) {
//       var li = document.createElement('li');

//       li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
//       parent.appendChild(li);
//     }
//   }
// };

// // DUBAI STORE
// var dubai = {

//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,

//   cookiesPerHr: function() {
//     var customers = customersPerHr(this.minCust, this.maxCust);

//     return Math.floor(customers * this.avgCookies);
//   },

//   cookieTotal: function() {
//     var cookies = [];
//     var sum = 0;

//     for (var i = 0; i < hours.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHr();
//       cookies.push(hourlyCookies);
//       sum += hourlyCookies;
//     }

//     cookies.push(sum);

//     return cookies;
//   },

//   render: function() {
//     var parent = document.getElementById('dubai');
//     var cookieArray = this.cookieTotal();

//     for (var i = 0; i < cookieArray.length; i++) {
//       var li = document.createElement('li');

//       li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
//       parent.appendChild(li);
//     }
//   }
// };

// // PARIS STORE
// var paris = {

//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,

//   cookiesPerHr: function() {
//     var customers = customersPerHr(this.minCust, this.maxCust);

//     return Math.floor(customers * this.avgCookies);
//   },

//   cookieTotal: function() {
//     var cookies = [];
//     var sum = 0;

//     for (var i = 0; i < hours.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHr();

//       cookies.push(hourlyCookies);
//       sum += hourlyCookies;
//     }

//     cookies.push(sum);

//     return cookies;
//   },

//   render: function() {
//     var parent = document.getElementById('paris');
//     var cookieArray = this.cookieTotal();

//     for (var i = 0; i < cookieArray.length; i++) {
//       var li = document.createElement('li');

//       li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
//       parent.appendChild(li);
//     }
//   }
// };

// // LIMA STORE
// var lima = {

//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesPerHr: function() {
//     var customers = customersPerHr(this.minCust, this.maxCust);

//     return Math.floor(customers * this.avgCookies);
//   },

//   cookieTotal: function() {
//     var cookies = [];
//     var sum = 0;

//     for (var i = 0; i < hours.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHr();

//       cookies.push(hourlyCookies);
//       sum += hourlyCookies;
//     }

//     cookies.push(sum);

//     return cookies;
//   },

//   render: function() {
//     var parent = document.getElementById('lima');
//     var cookieArray = this.cookieTotal();

//     for (var i = 0; i < cookieArray.length; i++) {
//       var li = document.createElement('li');

//       li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
//       parent.appendChild(li);
//     }
//   }
// };


// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();