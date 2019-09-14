function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, shallow } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTab } from './tab';
describe('EuiTab', function () {
  test('renders button', function () {
    var component = React.createElement(EuiTab, _extends({
      onClick: function onClick() {}
    }, requiredProps), "children");
    expect(render(component)).toMatchSnapshot();
  });
  test('renders anchor', function () {
    var component = React.createElement(EuiTab, _extends({
      href: "/baz/bing"
    }, requiredProps), "children");
    expect(render(component)).toMatchSnapshot();
  });
  test('renders isSelected', function () {
    var component = React.createElement(EuiTab, _extends({
      onClick: function onClick() {},
      isSelected: true
    }, requiredProps), "children");
    expect(render(component)).toMatchSnapshot();
  });
  describe('Props', function () {
    describe('onClick', function () {
      test('is called when the button is clicked', function () {
        var onClickHandler = jest.fn();
        var $button = shallow(React.createElement(EuiTab, {
          onClick: onClickHandler
        }));
        $button.simulate('click');
        expect(onClickHandler).toBeCalled();
      });
    });
  });
});