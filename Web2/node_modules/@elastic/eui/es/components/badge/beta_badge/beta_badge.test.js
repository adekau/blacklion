function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiBetaBadge } from './beta_badge';
describe('EuiBetaBadge', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiBetaBadge, _extends({
      label: "Beta"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});