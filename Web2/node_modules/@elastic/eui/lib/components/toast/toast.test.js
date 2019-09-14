"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _toast = require("./toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiToast', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_toast.EuiToast, _extends({}, _test.requiredProps, {
      title: "test title"
    }), _react.default.createElement("p", null, "Hi")));
    expect(component).toMatchSnapshot();
  });
  describe('Props', function () {
    describe('title', function () {
      test('is rendered', function () {
        var component = _react.default.createElement(_toast.EuiToast, {
          title: "toast title"
        });

        expect((0, _enzyme.mount)(component)).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _toast.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = _react.default.createElement(_toast.EuiToast, {
            color: color,
            title: "test title"
          });

          expect((0, _enzyme.mount)(component)).toMatchSnapshot();
        });
      });
    });
    describe('iconType', function () {
      test('is rendered', function () {
        var component = _react.default.createElement(_toast.EuiToast, {
          iconType: "user",
          title: "test title"
        });

        expect((0, _enzyme.mount)(component)).toMatchSnapshot();
      });
    });
    describe('onClose', function () {
      test('is called when the close button is clicked', function () {
        var onCloseHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_toast.EuiToast, {
          onClose: onCloseHandler,
          title: "test title"
        }));
        var closeButton = (0, _test.findTestSubject)(component, 'toastCloseButton');
        closeButton.simulate('click');
        expect(onCloseHandler).toBeCalledTimes(1);
      });
    });
  });
});