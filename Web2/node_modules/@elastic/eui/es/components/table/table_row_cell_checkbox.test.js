import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiTableRowCellCheckbox } from './table_row_cell_checkbox';
describe('EuiTableRowCellCheckbox', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableRowCellCheckbox, requiredProps));
    expect(component).toMatchSnapshot();
  });
});