import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiButton, COLORS, SIZES, ICON_SIDES } from './button';
describe('EuiButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiButton, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('fill', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButton, {
          fill: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButton, {
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = render(React.createElement(EuiButton, {
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isLoading', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButton, {
          isLoading: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('fullWidth', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButton, {
          fullWidth: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButton, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiButton, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = render(React.createElement(EuiButton, {
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      ICON_SIDES.forEach(function (iconSide) {
        test("".concat(iconSide, " is rendered"), function () {
          var component = render(React.createElement(EuiButton, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = render(React.createElement(EuiButton, {
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButton, {
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButton, {
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});