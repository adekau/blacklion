import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiPanel } from './panel';
describe('EuiPanel', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiPanel, requiredProps));
    expect(component).toMatchSnapshot();
  });
});