"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _icon_tip = require("./icon_tip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiIconTip', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_icon_tip.EuiIconTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('type', function () {
      test('is rendered as the icon', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_icon_tip.EuiIconTip, {
          type: "alert",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      test('is rendered as the icon color', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_icon_tip.EuiIconTip, {
          color: "warning",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('size', function () {
      test('is rendered as the icon size', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_icon_tip.EuiIconTip, {
          size: "xl",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});