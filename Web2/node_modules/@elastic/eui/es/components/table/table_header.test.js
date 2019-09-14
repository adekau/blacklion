import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableHeader } from './table_header';
describe('EuiTableHeader', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableHeader, requiredProps, "children"));
    expect(component).toMatchSnapshot();
  });
});