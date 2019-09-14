"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _steps_horizontal = require("./steps_horizontal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var steps = [{
  title: 'Completed Step 1',
  isComplete: true,
  onClick: function onClick() {}
}, {
  title: 'Selected Step 2',
  isSelected: true,
  onClick: function onClick() {}
}, {
  title: 'Incomplete Step 3',
  onClick: function onClick() {}
}, {
  title: 'Disabled Step 4',
  disabled: true,
  onClick: function onClick() {}
}];
describe('EuiStepsHorizontal', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_steps_horizontal.EuiStepsHorizontal, _extends({}, _test.requiredProps, {
      steps: steps
    })));
    expect(component).toMatchSnapshot();
  });
});