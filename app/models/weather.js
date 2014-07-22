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
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      // console.log(forecast);
      var simpleforecast = forecast.simpleforecast;
      // console.log(simpleforecast);
      var tenDays = simpleforecast.forecastday;
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
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      // console.log(forecast);
      var simpleforecast = forecast.simpleforecast;
      // console.log(simpleforecast);
      var tenDays = simpleforecast.forecastday;
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


Weather.getAllHighs = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      var simpleforecast = forecast.simpleforecast;
      var tenDays = simpleforecast.forecastday;
      var tenHighs = [];

      for (var i = 0; i < tenDays.length; i++) {
        // console.log(tenDays[i].high.fahrenheit);
        tenHighs.push(parseInt(tenDays[i].high.fahrenheit));
      }
      console.log(tenHighs);
      cb(tenHighs);
   });
  };


Weather.getAllLows = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      var simpleforecast = forecast.simpleforecast;
      var tenDays = simpleforecast.forecastday;
      var tenLows = [];

      for (var i = 0; i < tenDays.length; i++) {
        // console.log(tenDays[i].low.fahrenheit);
        tenLows.push(parseInt(tenDays[i].low.fahrenheit));
      }
      console.log(tenLows);
      cb(tenLows);
   });
 };

Weather.getDeltas = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      var simpleforecast = forecast.simpleforecast;
      var tenDays = simpleforecast.forecastday;
      var tenLows = [];

      for (var i = 0; i < tenDays.length; i++) {
        // console.log(tenDays[i].low.fahrenheit);
        tenLows.push(parseInt(tenDays[i].low.fahrenheit));
      }
      console.log(tenLows);
      cb(tenLows);
   });
 };

Weather.deltas = function (zip, cb) {

  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/forecast10day/q/' + zip + '.json';
 
  request(url, function(error, response, body) {
      body = JSON.parse(body);
      debugger;
      var forecast = body.forecast;
      var simpleforecast = forecast.simpleforecast;
      var tenDays = simpleforecast.forecastday;
      var deltas = [];

      for (var i = 0; i < tenDays.length; i++) {
        deltas.push(parseInt(tenDays[i].high.fahrenheit)- parseInt(tenDays[i].low.fahrenheit));
      }
      console.log(deltas);
      cb(deltas);
   });
};

Weather.moon = function(zip, cb) { 
  var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/astronomy/q/'+zip+'.json';
    var phase;
    request(url, function(error, response, body) {
       body = JSON.parse(body);
       var moonLum = parseInt(body.moon_phase.percentIlluminated);
       console.log(moonLum);
        if (moonLum >= 0 && moonLum <=5) {
          phase = 'New';
        } else if (moonLum >=6 && moonLum <=44) {
          phase = 'Crescent';
        } else if (moonLum >=45 && moonLum <=55) {
          phase = 'Quarter';
        } else if (moonLum >=56 && moonLum <=94) {
          phase = 'Gibbous';
        } else if (moonLum >=95 && moonLum <=100) {
          phase = 'Full';
        } else {
          phase = console.log('No moon at all');
        }
      console.log(phase);
      cb(phase);
    });

};






module.exports = Weather;
