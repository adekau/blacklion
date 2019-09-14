import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableRow } from './table_row';
import { EuiTableRowCell } from './table_row_cell';
test('renders EuiTableRow', function () {
  var component = React.createElement(EuiTableRow, requiredProps, React.createElement(EuiTableRowCell, null, "hi"));
  expect(render(component)).toMatchSnapshot();
});
describe('isSelected', function () {
  test('renders true when specified', function () {
    var component = React.createElement(EuiTableRow, {
      isSelected: true
    }, React.createElement(EuiTableRowCell, null));
    expect(render(component)).toMatchSnapshot();
  });
});