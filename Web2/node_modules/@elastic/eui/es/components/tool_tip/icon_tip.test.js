function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiIconTip } from './icon_tip';
describe('EuiIconTip', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiIconTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('type', function () {
      test('is rendered as the icon', function () {
        var component = render(React.createElement(EuiIconTip, {
          type: "alert",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      test('is rendered as the icon color', function () {
        var component = render(React.createElement(EuiIconTip, {
          color: "warning",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('size', function () {
      test('is rendered as the icon size', function () {
        var component = render(React.createElement(EuiIconTip, {
          size: "xl",
          id: "id",
          content: "content"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});