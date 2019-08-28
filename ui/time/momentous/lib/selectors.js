// Generated by CoffeeScript 1.6.3
(function() {
  var flatSplat, inDir, inhere, misc, partial2, path, reverse2, selectors, splattedPartial2, _, _ref,
    __slice = [].slice;

  path = require("path");

  _ref = require(path.join(__dirname, "util.js")), reverse2 = _ref.reverse2, partial2 = _ref.partial2, flatSplat = _ref.flatSplat, inDir = _ref.inDir, splattedPartial2 = _ref.splattedPartial2;

  _ = require("underscore");

  inhere = inDir(__dirname);

  misc = require(inhere("misc.js"));

  selectors = (function() {
    var oneArgs, twoArgs, _outs;
    oneArgs = {};
    /**
    	 * Given a list of moments, return a clone of the moment with the earliest date.
    	 * @param  {Array} momentList An array of moments, or a sequence of individual moments (splatted).
    	 * @return {Moment}               A clone of the earliest moment.
    */

    oneArgs.earliest = function() {
      var i, momentList, _earliestSoFar, _i, _ref1;
      momentList = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _earliestSoFar = momentList[0];
      for (i = _i = 1, _ref1 = momentList.length - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        if (momentList[i].isBefore(_earliestSoFar)) {
          _earliestSoFar = momentList[i];
        }
      }
      return _earliestSoFar.clone();
    };
    /**
    	 * Given a list of moments, return a clone of the moment with the latest date.
    	 * @param  {Array} momentList An array of moments, or a sequence of individual moments (splatted).
    	 * @return {Moment}               A clone of the latest moment.
    */

    oneArgs.latest = function() {
      var i, momentList, _i, _latestSoFar, _ref1;
      momentList = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _latestSoFar = momentList[0];
      for (i = _i = 1, _ref1 = momentList.length - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        if (momentList[i].isAfter(_latestSoFar)) {
          _latestSoFar = momentList[i];
        }
      }
      return _latestSoFar.clone();
    };
    twoArgs = {};
    /**
    	 * Given a comparison moment and a list of other moments, return clones of all moments with dates before the comparison date.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to filter, or a sequence of individual moments (splatted).
    	 * @return {Array}              An array of clones of all moments occurring before the comparison moment.
    */

    twoArgs.allBefore = function() {
      var compareAgainst, momentList, _before;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _before = _.filter(momentList, function(aMoment) {
        return aMoment.isBefore(compareAgainst);
      });
      _before = _.map(_before, function(aMoment) {
        return aMoment.clone();
      });
      return _before;
    };
    /**
    	 * Given a comparison moment and a list of other moments, return clones of all moments with dates after the comparison date.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to filter, or a sequence of individual moments (splatted).
    	 * @return {Array}              An array of clones of all moments occurring after the comparison moment.
    */

    twoArgs.allAfter = function() {
      var compareAgainst, momentList, _after;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _after = _.filter(momentList, function(aMoment) {
        return aMoment.isAfter(compareAgainst);
      });
      _after = _.map(_after, function(aMoment) {
        return aMoment.clone();
      });
      return _after;
    };
    /**
    	 * Given a comparison moment and a list of other moments, return the single moment closest in time to the comparison moment.
    	 * @param  {Moment} compareAgainst A moment to compare agsint.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment closest in time to the comparison moment.
    */

    twoArgs.closestTo = function() {
      var compareAgainst, i, momentList, _closestSoFar, _diff, _i, _minDiff, _ref1;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _closestSoFar = momentList[0];
      _minDiff = misc.absDiff(compareAgainst, momentList[0]);
      for (i = _i = 1, _ref1 = momentList.length - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        _diff = misc.absDiff(compareAgainst, momentList[i]);
        if (_diff < _minDiff) {
          _closestSoFar = momentList[i];
          _minDiff = _diff;
        }
      }
      return _closestSoFar;
    };
    /**
    	 * Given a comparison moment and a list of other moments, return the single moment farthest in time from the comparison moment.
    	 * @param  {Moment} compareAgainst A moment to compare against.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment farthest in time from the comparison moment.
    */

    twoArgs.farthestFrom = function() {
      var compareAgainst, i, momentList, _diff, _farthestSoFar, _i, _maxDiff, _ref1;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (_.isArray(momentList[0])) {
        momentList = momentList[0];
      }
      _farthestSoFar = momentList[0];
      _maxDiff = misc.absDiff(compareAgainst, momentList[0]);
      for (i = _i = 1, _ref1 = momentList.length - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        _diff = misc.absDiff(compareAgainst, momentList[i]);
        if (_diff > _maxDiff) {
          _farthestSoFar = momentList[i];
          _maxDiff = _diff;
        }
      }
      return _farthestSoFar;
    };
    /**
    	 * Given a comparison moment and a list of other moments, filter the list down to those moments occurring before the comparison and then return the one closest in time.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment closest in time to the comparison moment, out of all moments occurring before the comparison.
    */

    twoArgs.closestBefore = function() {
      var compareAgainst, momentList;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return twoArgs.closestTo(compareAgainst, twoArgs.allBefore(compareAgainst, flatSplat(momentList)));
    };
    /**
    	 * Given a comparison moment and a list of other moments, filter the list down to those moments occurring after the comparison and then return the one closest in time.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment closest in time to the comparison moment, out of all moments occurring after the comparison.
    */

    twoArgs.closestAfter = function() {
      var compareAgainst, momentList;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return twoArgs.closestTo(compareAgainst, twoArgs.allAfter(compareAgainst, flatSplat(momentList)));
    };
    /**
    	 * Given a comparison moment and a list of other moments, filter the list down to those moments occurring before the comparison and then return the one farthest in time.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment farthest in time to the comparison moment, out of all moments occurring before the comparison.
    */

    twoArgs.farthestBefore = function() {
      var compareAgainst, momentList;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return twoArgs.farthestFrom(compareAgainst, twoArgs.allBefore(compareAgainst, flatSplat(momentList)));
    };
    /**
    	 * Given a comparison moment and a list of other moments, filter the list down to those moments occurring after the comparison and then return the one farthest in time.
    	 * @param  {Moment} compareAgainst A moment to compare the other moments against.
    	 * @param {Array} momentList... An array of moments to select from.
    	 * @return {Moment}              The single moment farthest in time to the comparison moment, out of all moments occurring after the comparison.
    */

    twoArgs.farthestAfter = function() {
      var compareAgainst, momentList;
      compareAgainst = arguments[0], momentList = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return twoArgs.farthestFrom(compareAgainst, twoArgs.allAfter(compareAgainst, flatSplat(momentList)));
    };
    _outs = {};
    _.extend(_outs, oneArgs);
    _.each(_.pairs(twoArgs), function(onePair) {
      var fnName, fnRef;
      fnName = onePair[0];
      fnRef = onePair[1];
      return _outs[fnName] = splattedPartial2(fnRef);
    });
    return _outs;
  })();

  module.exports = selectors;

}).call(this);