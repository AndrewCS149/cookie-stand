'use strict';

// Store hours for ALL locations
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
  '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'
];

var sumArr = []; // will hold the daily sales for all stores
var hourlySales = []; // will hold hourly sales for all stores

function Store(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

// Prototype to calculate the total amount of cookies bought each hour
Store.prototype.cookiesPerHr = function () {
  // traffic rate refers to the hourly percentage of traffic flow
  var trafficRate = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

  // calculate cookies consumed per hour by multiplying the 'avgCookies' by a
  // randomly generated number.
  var cookieArr = [];
  for (var i = 0; i < storeHours.length; i++) {
    var hourlyCookies = Math.ceil(custPerHr * this.avgCookies);
    var custPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

    // push values to arrays
    cookieArr.push(Math.ceil(custPerHr * this.avgCookies * trafficRate[i]));
    hourlySales.push(Math.ceil(custPerHr * this.avgCookies * trafficRate[i]));
  }

  return cookieArr;
};

// Prototype to display the store hours as the header row
Store.prototype.renderHrs = function () {
  // gather info for sales table
  var salesTable = document.getElementById('salesTable');
  var salesRow = document.createElement('tr');
  var salesData = document.createElement('th');

  // gather info for staff table
  var staffTable = document.getElementById('staffTable');
  var staffRow = document.createElement('tr');
  var staffData = document.createElement('td');

  // add a leading empty cell
  salesData.textContent = '';
  salesRow.appendChild(salesData);

  // add store hours in header row
  for (var i = 0; i < storeHours.length; i++) {
    // sales
    salesData = document.createElement('th');
    salesData.textContent = storeHours[i];
    salesRow.appendChild(salesData);

    // staff
    staffData = document.createElement('td');
    staffData.textContent = storeHours[i];
    staffRow.appendChild(staffData);
  }

  // add 'Daily Total' header
  salesData = document.createElement('th');
  salesData.textContent = 'Daily Total:';
  salesRow.appendChild(salesData);

  // append to tables
  salesTable.appendChild(salesRow);
  staffTable.appendChild(staffRow);
};

// Prototype to render the sales calculations and the staff needed
// to the sales.html page
Store.prototype.renderSales = function () {
  // gather info for sales table
  var cookies = this.cookiesPerHr();
  var salesTable = document.getElementById('salesTable');
  var salesRow = document.createElement('tr');
  var salesData = document.createElement('td');

  // gather info for staff table
  var staffTable = document.getElementById('staffTable');
  var staffRow = document.createElement('tr');
  var staffData = document.createElement('td');

  salesData.textContent = this.storeName;
  salesRow.appendChild(salesData);

  // add hourly total to row and accumulate sum
  // add staff needed to row
  var sum = 0;
  for (var i = 0; i < storeHours.length; i++) {
    // sales
    salesData = document.createElement('td');
    salesData.textContent = (cookies[i]);
    salesRow.appendChild(salesData);
    sum += cookies[i];

    // staff
    staffData = document.createElement('td');
    staffData.textContent = Math.ceil((cookies[i]) / 20);
    if (staffData.textContent < 2) {
      staffData.textContent = 2;
    }
    staffRow.appendChild(staffData);
  }

  // add sum to last table data
  sumArr.push(sum);
  salesData = document.createElement('td');
  salesData.textContent = sum;
  salesRow.appendChild(salesData);

  // append to tables
  salesTable.appendChild(salesRow);
  staffTable.appendChild(staffRow);
};

// Prototype to calculate and display the hourly sums as well as
// the final daily sum on the sales table.
Store.prototype.renderTotals = function () {
  var totalSum = 0;
  var tempArr = [];
  var hourlyTotal = [];
  var len = storeHours.length;

  // calculate total sum of all hours from all store locations
  for (var i = 0; i < hourlySales.length; i++) {
    totalSum += hourlySales[i];
  }

  // split hourly sales array by store sales
  for (i = 0; i < hourlySales.length; i += len) {
    tempArr.push(hourlySales.slice(i, i + len));
  }

  // create an array of the hourly sums
  for (i = 0; i < len; i++) {
    var tempSum = 0;

    for (var j = 0; j < tempArr.length; j++) {
      tempSum += tempArr[j][i];
    }
    hourlyTotal.push(tempSum);
  }

  // create 'Total Sales' data block to sales table
  var tBody = document.getElementById('salesTable');
  var tRow = document.createElement('tr');
  var tableD = document.createElement('td');
  tableD.textContent = 'Total Sales:';
  tRow.appendChild(tableD);

  // add hourly sums to sales table row
  for (i = 0; i < storeHours.length; i++) {
    tableD = document.createElement('td');
    tableD.textContent = (hourlyTotal[i]);
    tRow.appendChild(tableD);
  }

  // add the total sum of all hours from all store locations
  tableD = document.createElement('td');
  tableD.textContent = (totalSum);
  tRow.appendChild(tableD);
  tBody.appendChild(tRow);
};

// construct new Store object and test all prototypes
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

// render to sales.html page
Store.prototype.renderHrs();
seattle.renderSales();
tokyo.renderSales();
dubai.renderSales();
paris.renderSales();
lima.renderSales();
Store.prototype.renderTotals();
