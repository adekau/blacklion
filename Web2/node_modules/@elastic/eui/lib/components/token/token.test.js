"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _token = require("./token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tokenColors = ['tokenTint01', 'tokenTint02', 'tokenTint03', 'tokenTint04', 'tokenTint05', 'tokenTint06', 'tokenTint07', 'tokenTint08', 'tokenTint09', 'tokenTint10'];
describe('EuiToken', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_token.EuiToken, {
      iconType: "dot",
      size: "s"
    }));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('shape', function () {
      _token.SHAPES.forEach(function (shape) {
        test("".concat(shape, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_token.EuiToken, {
            iconType: "dot",
            size: "s",
            displayOptions: {
              shape: shape,
              color: 'tokenTint01'
            }
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('color', function () {
      tokenColors.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_token.EuiToken, {
            iconType: "dot",
            size: "s",
            displayOptions: {
              color: color,
              shape: 'square'
            }
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      _token.SIZES.forEach(function (tokenSize) {
        test("".concat(tokenSize, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_token.EuiToken, {
            iconType: "dot",
            size: tokenSize,
            displayOptions: {
              color: 'tokenTint01',
              shape: 'circle'
            }
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});