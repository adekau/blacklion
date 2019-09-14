import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiTableSortMobile } from './table_sort_mobile';
describe('EuiTableSortMobile', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableSortMobile, requiredProps));
    expect(component).toMatchSnapshot();
  });
});