import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTable } from './table';
import { EuiTableRow } from './table_row';
import { EuiTableRowCell } from './table_row_cell';
import { EuiTableBody } from './table_body';
import { EuiTableHeader } from './table_header';
import { EuiTableHeaderCell } from './table_header_cell';
test('renders EuiTable', function () {
  var component = React.createElement(EuiTable, requiredProps, React.createElement(EuiTableHeader, null, React.createElement(EuiTableHeaderCell, null, "Hi Title"), React.createElement(EuiTableHeaderCell, null, "Bye Title")), React.createElement(EuiTableBody, null, React.createElement(EuiTableRow, null, React.createElement(EuiTableRowCell, null, "Hi")), React.createElement(EuiTableRow, null, React.createElement(EuiTableRowCell, null, "Bye"))));
  expect(render(component)).toMatchSnapshot();
});