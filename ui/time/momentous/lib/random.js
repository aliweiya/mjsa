// Generated by CoffeeScript 1.6.3
(function() {
  var flatSplat, inDir, inhere, moment, partial2, partial3, path, randoms, reverse2, _, _momentCheck, _ref, _reverse;

  path = require("path");

  _ref = require(path.join(__dirname, "util.js")), reverse2 = _ref.reverse2, partial2 = _ref.partial2, partial3 = _ref.partial3, flatSplat = _ref.flatSplat, inDir = _ref.inDir;

  _ = require("underscore");

  moment = require("moment");

  _momentCheck = function(aMoment) {
    if (!moment.isMoment(aMoment)) {
      return moment(aMoment);
    }
    return aMoment;
  };

  _reverse = function(list) {
    var i, _reversed;
    _reversed = [];
    i = list.length;
    while (i--) {
      _reversed.push(list[i]);
    }
    return _reversed;
  };

  inhere = inDir(__dirname);

  randoms = (function() {
    var nRandomAround, _nRandomBetween, _outs, _randomAround, _randomBetween, _randomizeAbsDiff, _randomizeSignedDiff;
    _randomizeAbsDiff = function(maxDiff) {
      var diff, randomizedDiff;
      diff = Math.abs(maxDiff);
      randomizedDiff = Math.round(Math.random() * diff);
      return randomizedDiff;
    };
    _randomizeSignedDiff = function(maxDiff) {
      var diff, sign;
      diff = _randomizeAbsDiff(maxDiff);
      sign = Math.random();
      if (sign < 0.5) {
        diff *= -1;
      }
      return diff;
    };
    _outs = {};
    _randomBetween = function(startMoment, endMoment) {
      var diff, resolution;
      startMoment = _momentCheck(startMoment);
      endMoment = _momentCheck(endMoment);
      resolution = "ms";
      diff = _randomizeAbsDiff(startMoment.diff(endMoment, resolution));
      if (startMoment.isBefore(endMoment)) {
        return startMoment.clone().add(resolution, diff);
      } else {
        return endMoment.clone().add(resolution, diff);
      }
    };
    /**
    	 * Given two moment instances as endpoints, return a random moment somewhere between the two.
    	 *
    	 * Alternately, given a single moment, return a function which accepts a second moment and returns a random point between that and the first.
    	 * 
    	 * @param {Moment} moment1 The first moment of the range.  It doesn't have to come before moment2.
    	 * @param  {Moment} moment2 The second moment of the range.  It doesn't have to come after moment1.
    	 * @return {Moment}              A new moment instance at a random point in time between the two endpoints.
    */

    _outs.randomBetween = partial2(_randomBetween);
    _nRandomBetween = function(count, startMoment, endMoment) {
      _outs = [];
      while (count--) {
        _outs.push(randomBetween(startMoment, endMoment, resolution));
      }
      return _outs;
    };
    /**
    	 * Given a number of moments to generate and two moment instances as endpoints, return a random moment somewhere between the two.
    	 *
    	 * Alternately, given only a number, return a function which accepts two moment endpoints and returns an array of that number of random moments between the two points.
    	 * 
    	 * @param {Number} count The number of random moments to return.
    	 * @param {Moment} moment1 The first moment of the range.  It doesn't have to come before moment2.
    	 * @param  {Moment} moment2 The second moment of the range.  It doesn't have to come after moment1.
    	 * @return {Array}              An array of `count` random moments between `moment1` and `moment2`.
    */

    _outs.nRandomBetween = partial3(_nRandomBetween);
    _randomAround = function(middleMoment, offset) {
      var diff, maxDiff;
      middleMoment = _momentCheck(middleMoment);
      maxDiff = middleMoment.diff(middleMoment.clone().add(offset));
      diff = _randomizeSignedDiff(maxDiff);
      return middleMoment.clone().add(diff);
    };
    /**
    	 * Given a moment and a maximum offset, return a random moment within that offset of the passed moment.
    	 *
    	 * Alternately, given only a moment, return a function which accepts a maximum offset and returns a random moment within that offset of the previously passed moment.
    	 * 
    	 * @param {Moment} midPoint The moment at the center of the range of possible random moments. 
    	 * @param {Object} maxOffset An object with key-value pairs corresponding to the maximum offset from the midpoint.
    	 * @return {Moment}             A random moment within `maxOffset` of `midPoint`.
    */

    _outs.randomAround = partial2(_randomAround);
    nRandomAround = function(count, middleMoment, offset) {
      _outs = [];
      while (count--) {
        _outs.push(randomAround(middleMoment, offset));
      }
      return _outs;
    };
    /**
    	 * Given a number of moments to generate, a midpoint moment and a maximum offset, return an array of that number of random moments within that offset of the midpoint.
    	 *
    	 * Alternately, given only a number, return a function which accepts a midpoint and a maximum offset returns an array of that number of random moments within that offset of the midpoint.
    	 *
    	 * @param {Number} count The number of moments to generate.
    	 * @param {Moment} midPoint The moment at the center of the range of possible random moments. 
    	 * @param {Object} maxOffset An object with key-value pairs corresponding to the maximum offset from the midpoint.
    	 * @return {Array}             A `count`-length array of random moments within `maxOffset` of `midPoint`.
    */

    _outs.nRandomAround = partial3(nRandomAround);
    _outs.randBetween = _outs.randomBetween;
    _outs.nRandBetween = _outs.nRandomBetween;
    _outs.randAround = _outs.randomAround;
    _outs.nRandAround = _outs.nRandomAround;
    return _outs;
  })();

  module.exports = randoms;

}).call(this);
