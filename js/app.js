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

    return customers * this.avgCookies;
  },

  cookieTotal: function() {
    var cookies = [];
    var sum = 0;

    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHr();
      cookies.push(hourlyCookies);
      sum += hourlyCookies;
    }

    cookies.push(sum);

    return cookies;
  }
};

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

    return customers * this.avgCookies;
  },

  cookieTotal: function() {
    var cookies = [];
    var sum = 0;

    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHr();
      cookies.push(hourlyCookies);
      sum += hourlyCookies;
    }

    cookies.push(sum);

    return cookies;
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

    return customers * this.avgCookies;
  },

  cookieTotal: function() {
    var cookies = [];
    var sum = 0;

    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHr();
      cookies.push(hourlyCookies);
      sum += hourlyCookies;
    }

    cookies.push(sum);

    return cookies;
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

    return customers * this.avgCookies;
  },

  cookieTotal: function() {
    var cookies = [];
    var sum = 0;

    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHr();
      cookies.push(hourlyCookies);
      sum += hourlyCookies;
    }

    cookies.push(sum);

    return cookies;
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

    return customers * this.avgCookies;
  },

  cookieTotal: function() {
    var cookies = [];
    var sum = 0;

    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHr();
      cookies.push(hourlyCookies);
      sum += hourlyCookies;
    }

    cookies.push(sum);

    return cookies;
  }
};

console.log(lima.cookieTotal());

