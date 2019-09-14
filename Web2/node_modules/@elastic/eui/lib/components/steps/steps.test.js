"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _steps = require("./steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var steps = [{
  title: 'first title',
  children: _react.default.createElement("p", null, "Do this first")
}, {
  title: 'second title',
  children: _react.default.createElement("p", null, "Then this")
}, {
  title: 'third title',
  children: _react.default.createElement("p", null, "And finally, do this"),
  status: 'incomplete'
}];
describe('EuiSteps', function () {
  test('renders steps', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_steps.EuiSteps, _extends({}, _required_props.requiredProps, {
      steps: steps
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders steps with firstStepNumber', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_steps.EuiSteps, _extends({}, _required_props.requiredProps, {
      steps: steps,
      firstStepNumber: 10
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders step title inside "headingElement" element', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_steps.EuiSteps, _extends({}, _required_props.requiredProps, {
      steps: steps,
      headingElement: "h2"
    })));
    expect(component).toMatchSnapshot();
  });
});