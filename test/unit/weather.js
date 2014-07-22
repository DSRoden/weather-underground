/* jshint expr:true */
/* global describe, it */

'use strict';


var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('high', function () {
    it('should get high temp', function(done) {
        Weather.getHigh(37206, function(temp) {
          expect(temp).to.be.ok;
          expect(temp.length).to.be.at.least(2);
          done();
        });
     });
   });
  
   describe('low', function () {
    it('should get low temp', function(done) {
        Weather.getLow(37206, function(temp) {
          expect(temp).to.be.ok;
          expect(temp.length).to.be.at.least(2);
          done();
        });
     });
  });
});
