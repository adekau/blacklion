import React from 'react';
import { render } from 'enzyme';
import { EuiToken, SHAPES, SIZES } from './token';
var tokenColors = ['tokenTint01', 'tokenTint02', 'tokenTint03', 'tokenTint04', 'tokenTint05', 'tokenTint06', 'tokenTint07', 'tokenTint08', 'tokenTint09', 'tokenTint10'];
describe('EuiToken', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiToken, {
      iconType: "dot",
      size: "s"
    }));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('shape', function () {
      SHAPES.forEach(function (shape) {
        test("".concat(shape, " is rendered"), function () {
          var component = render(React.createElement(EuiToken, {
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
          var component = render(React.createElement(EuiToken, {
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
      SIZES.forEach(function (tokenSize) {
        test("".concat(tokenSize, " is rendered"), function () {
          var component = render(React.createElement(EuiToken, {
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