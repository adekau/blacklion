import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiButtonEmpty, COLORS, SIZES, ICON_SIDES, FLUSH_TYPES } from './button_empty';
describe('EuiButtonEmpty', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiButtonEmpty, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButtonEmpty, {
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = render(React.createElement(EuiButtonEmpty, {
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButtonEmpty, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiButtonEmpty, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = render(React.createElement(EuiButtonEmpty, {
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      ICON_SIDES.forEach(function (iconSide) {
        test("".concat(iconSide, " is rendered"), function () {
          var component = render(React.createElement(EuiButtonEmpty, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('flush', function () {
      FLUSH_TYPES.forEach(function (flushType) {
        test("".concat(flushType, " is rendered"), function () {
          var component = render(React.createElement(EuiButtonEmpty, {
            flush: flushType
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = render(React.createElement(EuiButtonEmpty, {
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButtonEmpty, {
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButtonEmpty, {
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});