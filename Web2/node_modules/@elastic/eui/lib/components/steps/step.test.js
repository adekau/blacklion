"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _step = require("./step");

var _step_number = require("./step_number");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiStep', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_step.EuiStep, _extends({}, _required_props.requiredProps, {
      title: 'First step'
    }), _react.default.createElement("p", null, "Do this")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('headingElement', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step.EuiStep, {
        headingElement: 'h3',
        title: 'First step'
      }, _react.default.createElement("p", null, "Do this")));
      expect(component).toMatchSnapshot();
    });
    test('step', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step.EuiStep, {
        step: 5,
        title: 'First step'
      }, _react.default.createElement("p", null, "Do this")));
      expect(component).toMatchSnapshot();
    });
    describe('status', function () {
      _step_number.STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_step.EuiStep, {
            status: status,
            title: 'First step'
          }, _react.default.createElement("p", null, "Do this")));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});