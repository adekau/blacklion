"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _range_levels = require("./range_levels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiRangeLevels', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_range_levels.EuiRangeLevels, _extends({
      min: 0,
      max: 100,
      showTicks: true,
      levels: [{
        min: 0,
        max: 20,
        color: 'danger'
      }, {
        min: 20,
        max: 100,
        color: 'success'
      }]
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('should throw error if `level.min` is lower than `min`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_levels.EuiRangeLevels, {
        min: 0,
        max: 100,
        levels: [{
          min: -10,
          max: 20,
          color: 'danger'
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if `level.max` is higher than `max`', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_range_levels.EuiRangeLevels, {
        min: 0,
        max: 100,
        levels: [{
          min: 20,
          max: 200,
          color: 'danger'
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});