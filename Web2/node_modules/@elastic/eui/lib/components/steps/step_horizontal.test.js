"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _step_number = require("./step_number");

var _step_horizontal = require("./step_horizontal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiStepHorizontal', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, _extends({}, _required_props.requiredProps, {
      onClick: function onClick() {}
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('step', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
        step: 5,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('title', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
        title: 'First step',
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('isSelected', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
        isSelected: true,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('isComplete', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
        isComplete: true,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    describe('status', function () {
      _step_number.STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
            status: status,
            onClick: function onClick() {}
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('onClick', function () {
      test('is called when clicked', function () {
        var onClickHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
          step: 1,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).toBeCalledTimes(1);
      });
      test("isn't called when clicked if it's disabled", function () {
        var onClickHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_step_horizontal.EuiStepHorizontal, {
          disabled: true,
          step: 1,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).not.toBeCalled();
      });
    });
  });
});