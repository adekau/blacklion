"use strict";

var _relative_options = require("./relative_options");

describe('relativeUnitsFromLargestToSmallest', function () {
  test('relativeUnitsFromLargestToSmallest length', function () {
    expect(_relative_options.relativeUnitsFromLargestToSmallest.length).toBe(7);
  });
  test('relativeUnitsFromLargestToSmallest order', function () {
    expect(_relative_options.relativeUnitsFromLargestToSmallest).toEqual(['y', 'M', 'w', 'd', 'h', 'm', 's']);
  });
});