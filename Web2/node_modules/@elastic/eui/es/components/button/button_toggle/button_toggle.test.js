function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiButtonToggle } from './button_toggle';
describe('EuiButtonToggle', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiButtonToggle, _extends({}, requiredProps, {
      label: "Label me"
    })));
    expect(component).toMatchSnapshot();
  });
});