import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiListGroup } from './list_group';
describe('EuiListGroup', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiListGroup, requiredProps));
    expect(component).toMatchSnapshot();
  });
});