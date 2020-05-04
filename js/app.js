'use strict';

var seattle = {

  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,

  customersPerHr: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesPerHr: function() {
    var customers = this.customersPerHr();

    return `${customers} customers. ${customers * this.avgCookies} cookies`;
  }
};

console.log(seattle.cookiesPerHr());

var tokyo = {

  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,

  customersPerHr: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesPerHr: function() {
    var customers = this.customersPerHr();

    return `${customers} customers. ${customers * this.avgCookies} cookies`;
  }
};

var dubai = {

  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,

  customersPerHr: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesPerHr: function() {
    var customers = this.customersPerHr();

    return `${customers} customers. ${customers * this.avgCookies} cookies`;
  }
};

var paris = {

  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,

  customersPerHr: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesPerHr: function() {
    var customers = this.customersPerHr();

    return `${customers} customers. ${customers * this.avgCookies} cookies`;
  }
};

var lima = {

  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,

  customersPerHr: function() {
    var min = this.minCust;
    var max = this.maxCust;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesPerHr: function() {
    var customers = this.customersPerHr();

    return `${customers} customers. ${customers * this.avgCookies} cookies`;
  }
};

