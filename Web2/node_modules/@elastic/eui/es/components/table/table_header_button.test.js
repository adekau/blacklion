import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableHeaderButton } from './table_header_button';
describe('EuiTableHeaderButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableHeaderButton, requiredProps));
    expect(component).toMatchSnapshot();
  });
});