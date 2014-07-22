'use strict';

var request = require('request');

function Weather(location) {

  this.location = location;

}

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
            var low = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            var temp = low + 'F';
            cb(temp);
          });
};



module.exports = Weather;
