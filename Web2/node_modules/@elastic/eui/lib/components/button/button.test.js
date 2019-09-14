"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _button = require("./button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiButton', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('fill', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          fill: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isLoading', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          isLoading: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('fullWidth', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          fullWidth: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _button.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      _button.SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      _button.ICON_SIDES.forEach(function (iconSide) {
        test("".concat(iconSide, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button.EuiButton, {
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button.EuiButton, {
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button.EuiButton, {
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});