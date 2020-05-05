'use strict';

// SEATTLE STORE
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

    return Math.floor(customers * this.avgCookies);
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
  },

  render: function() {
    var parent = document.getElementById('seattle');
    var cookieArray = this.cookieTotal();
    var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:',
      '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

    for (var i = 0; i < cookieArray.length; i++) {
      var li = document.createElement('li');

      li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
      parent.appendChild(li);
    }
  }
};


// TOKYO STORE
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

    return Math.floor(customers * this.avgCookies);
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
  },

  render: function() {
    var parent = document.getElementById('tokyo');
    var cookieArray = this.cookieTotal();
    var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:',
      '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

    for (var i = 0; i < cookieArray.length; i++) {
      var li = document.createElement('li');

      li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
      parent.appendChild(li);
    }
  }
};


// DUBAI STORE
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

    return Math.floor(customers * this.avgCookies);
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
  },

  render: function() {
    var parent = document.getElementById('dubai');
    var cookieArray = this.cookieTotal();
    var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:',
      '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

    for (var i = 0; i < cookieArray.length; i++) {
      var li = document.createElement('li');

      li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
      parent.appendChild(li);
    }
  }
};


// PARIS STORE
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

    return Math.floor(customers * this.avgCookies);
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
  },

  render: function() {
    var parent = document.getElementById('paris');
    var cookieArray = this.cookieTotal();
    var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:',
      '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

    for (var i = 0; i < cookieArray.length; i++) {
      var li = document.createElement('li');

      li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
      parent.appendChild(li);
    }
  }
};


// LIMA STORE
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

    return Math.floor(customers * this.avgCookies);
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
  },

  render: function() {
    var parent = document.getElementById('lima');
    var cookieArray = this.cookieTotal();
    var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:',
      '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

    for (var i = 0; i < cookieArray.length; i++) {
      var li = document.createElement('li');

      li.textContent = `${hours[i]} ${cookieArray[i]} cookies`;
      parent.appendChild(li);
    }
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

