import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableFooter } from './table_footer';
describe('EuiTableFooter', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableFooter, requiredProps, "children"));
    expect(component).toMatchSnapshot();
  });
});