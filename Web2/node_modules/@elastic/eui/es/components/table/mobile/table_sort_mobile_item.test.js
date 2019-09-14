import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiTableSortMobileItem } from './table_sort_mobile_item';
describe('EuiTableSortMobileItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableSortMobileItem, requiredProps));
    expect(component).toMatchSnapshot();
  });
});