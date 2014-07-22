'use strict';

var request = require('request');

function Weather() {}

Weather.getHigh = function(zip, cb){
    var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast/q/' + zip +'.json';

      request(url, function(error, response, body){
            body = JSON.parse(body);
            var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            var temp = high + 'F';
            cb(temp);
          });
};


Weather.getLow = function(zip, cb){
    var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast/q/' + zip +'.json';

      request(url, function(error, response, body){
            body = JSON.parse(body);
            var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
            var temp = low + 'F';
            cb(temp);
          });
};

Weather.getTenDayHighAvg = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
  var sigma = 0;
  var tenDays = [];
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      // console.log(forecast);
      var simpleforecast = forecast.simpleforecast;
      // console.log(simpleforecast);
      tenDays = simpleforecast.forecastday;
      // console.log(tenDays);
      for (var i = 0; i < tenDays.length; i++) {
        console.log(tenDays[i].high.fahrenheit);
        sigma += parseInt(tenDays[i].high.fahrenheit);
        console.log(sigma);
      }
     var avg = sigma/10;
     var temp = (avg + 'F');
     console.log(temp);
    cb(temp);
   });
  };


Weather.getTenDayLowAvg = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
  var sigma = 0;
  var tenDays = [];
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      // console.log(forecast);
      var simpleforecast = forecast.simpleforecast;
      // console.log(simpleforecast);
      tenDays = simpleforecast.forecastday;
      // console.log(tenDays);
      for (var i = 0; i < tenDays.length; i++) {
        console.log(tenDays[i].low.fahrenheit);
        sigma += parseInt(tenDays[i].low.fahrenheit);
        console.log(sigma);
      }
     var avg = sigma/10;
     var temp = (avg + 'F');
     console.log(temp);
    cb(temp);
   });
};

module.exports = Weather;
