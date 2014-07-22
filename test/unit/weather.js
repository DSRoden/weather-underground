/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('constructor', function(){
      it('should create a new weather object', function(){
            var wx = new Weather(37206);

            expect(wx).to.be.instanceof(Weather);
           // expect(wx.high).to.be.ok;
           // expect(wx.low).to.be.ok;
      });
  });
});
