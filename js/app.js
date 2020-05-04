'use strict';

var seattle = {

  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,

  customers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var tokyo = {

  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,

  customers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var dubai = {

  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,

  customers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var paris = {

  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,

  customers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var lima = {

  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,

  customers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

console.log(seattle.customers());
console.log(tokyo.customers());
console.log(dubai.customers());
console.log(paris.customers());
console.log(lima.customers());
