"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _range_track = require("./range_track");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiRangeTrack', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, _extends({
      min: 0,
      max: 100,
      step: 10,
      showTicks: true,
      value: "10",
      onChange: function onChange() {}
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('should throw error if `max` does not line up with `step` interval', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 105,
        step: 10
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if there are too many ticks to render', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 21,
        showTicks: true
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if `tickInterval` is off sequence from `step`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 100,
        step: 10,
        showTicks: true,
        tickInterval: 3
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is lower than `min`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 100,
        showTicks: true,
        ticks: [{
          label: '-100',
          value: -100
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is higher than `max`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 100,
        showTicks: true,
        ticks: [{
          label: '200',
          value: 200
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is off sequence from `step`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_track.EuiRangeTrack, {
        min: 0,
        max: 100,
        step: 50,
        showTicks: true,
        ticks: [{
          label: '10',
          value: 10
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});