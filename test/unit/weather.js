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
   
  describe('tenDayHighAvg', function () {
    it('should get average of 10 day high temps', function(done) {
        Weather.getTenDayHighAvg(37206, function(temp) {
          expect(temp).to.be.ok;
          expect(temp.length).to.be.at.least(2);
          done();
        });
     });
   });
  
   describe('tenDayLowAvg', function () {
    it('should get average of 10 day low temps', function(done) {
        Weather.getTenDayLowAvg(37206, function(temp) {
          expect(temp).to.be.ok;
          expect(temp.length).to.be.at.least(2);
          done();
        });
     });
   });
   
   describe('getAllHighs', function () {
    it('get array of high temps', function(done) {
        Weather.getAllHighs(37206, function(tenHighs) {
          expect(tenHighs).to.be.instanceof(Array);
          expect(tenHighs.length).to.equal(10);
          done();
        });
     });
   });
  
   describe('getAllLows', function () {
    it('get array of low temps', function(done) {
        Weather.getAllLows(37206, function(tenLows) {
          expect(tenLows).to.be.instanceof(Array);
          expect(tenLows.length).to.equal(10);
          done();
        });
     });
   });
   
   describe('getDeltas', function () {
    it('get array of deltas', function(done) {
        Weather.deltas(37206, function(deltas) {
          expect(deltas).to.be.instanceof(Array);
          expect(deltas.length).to.equal(10);
          done();
        });
     });
   });
});
