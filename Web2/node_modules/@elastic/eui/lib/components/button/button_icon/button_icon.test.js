"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _button_icon = require("./button_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiButtonIcon', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "button",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "button",
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "button",
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _button_icon.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, {
            "aria-label": "button",
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "button",
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "hoi",
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button_icon.EuiButtonIcon, {
          "aria-label": "hoi",
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});