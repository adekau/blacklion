function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { findTestSubject, requiredProps } from '../../test';
import { COLORS, EuiToast } from './toast';
describe('EuiToast', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiToast, _extends({}, requiredProps, {
      title: "test title"
    }), React.createElement("p", null, "Hi")));
    expect(component).toMatchSnapshot();
  });
  describe('Props', function () {
    describe('title', function () {
      test('is rendered', function () {
        var component = React.createElement(EuiToast, {
          title: "toast title"
        });
        expect(mount(component)).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = React.createElement(EuiToast, {
            color: color,
            title: "test title"
          });
          expect(mount(component)).toMatchSnapshot();
        });
      });
    });
    describe('iconType', function () {
      test('is rendered', function () {
        var component = React.createElement(EuiToast, {
          iconType: "user",
          title: "test title"
        });
        expect(mount(component)).toMatchSnapshot();
      });
    });
    describe('onClose', function () {
      test('is called when the close button is clicked', function () {
        var onCloseHandler = jest.fn();
        var component = mount(React.createElement(EuiToast, {
          onClose: onCloseHandler,
          title: "test title"
        }));
        var closeButton = findTestSubject(component, 'toastCloseButton');
        closeButton.simulate('click');
        expect(onCloseHandler).toBeCalledTimes(1);
      });
    });
  });
});