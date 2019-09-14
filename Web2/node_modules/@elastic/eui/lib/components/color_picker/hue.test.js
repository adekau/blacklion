"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _hue = require("./hue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var onChange = function onChange() {
  /* empty */
};

describe('EuiHue', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_hue.EuiHue, _extends({
      onChange: onChange
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('accepts a hue value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_hue.EuiHue, _extends({
      hue: 180,
      onChange: onChange
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('accepts a hex value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_hue.EuiHue, _extends({
      hue: 180,
      hex: "#00FFFF",
      onChange: onChange
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});