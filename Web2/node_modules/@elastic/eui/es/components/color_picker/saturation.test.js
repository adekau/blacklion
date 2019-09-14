function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiSaturation } from './saturation';

var onChange = function onChange() {
  /* empty */
};

describe('EuiHue', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSaturation, _extends({
      onChange: onChange
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('accepts a color', function () {
    var component = render(React.createElement(EuiSaturation, _extends({
      color: {
        h: 180,
        s: 1,
        v: 0.5
      },
      onChange: onChange
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});