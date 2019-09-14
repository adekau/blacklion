"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _button_empty = require("./button_empty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiButtonEmpty', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _button_empty.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      _button_empty.SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      _button_empty.ICON_SIDES.forEach(function (iconSide) {
        test("".concat(iconSide, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('flush', function () {
      _button_empty.FLUSH_TYPES.forEach(function (flushType) {
        test("".concat(flushType, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
            flush: flushType
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_button_empty.EuiButtonEmpty, {
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});