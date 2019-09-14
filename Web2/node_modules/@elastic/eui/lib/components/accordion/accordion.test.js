"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _accordion = require("./accordion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var id = 0;

var getId = function getId() {
  return "".concat(id++);
};

describe('EuiAccordion', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.EuiAccordion, _extends({
      id: getId()
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('buttonContentClassName', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_accordion.EuiAccordion, {
          id: getId(),
          buttonContentClassName: "button content class name"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('buttonContent', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_accordion.EuiAccordion, {
          id: getId(),
          buttonContent: _react.default.createElement("div", null, "Button content")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('extraAction', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_accordion.EuiAccordion, {
          id: getId(),
          extraAction: _react.default.createElement("button", null, "Extra action")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('initialIsOpen', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_accordion.EuiAccordion, {
          id: getId(),
          initialIsOpen: true
        }, _react.default.createElement("p", null, "You can see me.")));
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('behavior', function () {
    it('opens when clicked once', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_accordion.EuiAccordion, {
        id: getId()
      }));
      component.find('button').simulate('click');
      expect(component).toMatchSnapshot();
    });
    it('closes when clicked twice', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_accordion.EuiAccordion, {
        id: getId()
      }));
      component.find('button').simulate('click');
      component.find('button').simulate('click');
      expect(component).toMatchSnapshot();
    });
    it('accepts and calls an optional callback on open and close', function () {
      var onToggleHandler = jest.fn();
      var component = (0, _enzyme.mount)(_react.default.createElement(_accordion.EuiAccordion, {
        id: getId(),
        onToggle: onToggleHandler
      }));
      component.find('button').simulate('click');
      expect(onToggleHandler).toBeCalled();
      expect(onToggleHandler).toBeCalledWith(true);
      component.find('button').simulate('click');
      expect(onToggleHandler).toBeCalled();
      expect(onToggleHandler).toBeCalledWith(false);
    });
  });
});