"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table = require("./table");

var _table_row = require("./table_row");

var _table_row_cell = require("./table_row_cell");

var _table_body = require("./table_body");

var _table_header = require("./table_header");

var _table_header_cell = require("./table_header_cell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiTable', function () {
  var component = _react.default.createElement(_table.EuiTable, _required_props.requiredProps, _react.default.createElement(_table_header.EuiTableHeader, null, _react.default.createElement(_table_header_cell.EuiTableHeaderCell, null, "Hi Title"), _react.default.createElement(_table_header_cell.EuiTableHeaderCell, null, "Bye Title")), _react.default.createElement(_table_body.EuiTableBody, null, _react.default.createElement(_table_row.EuiTableRow, null, _react.default.createElement(_table_row_cell.EuiTableRowCell, null, "Hi")), _react.default.createElement(_table_row.EuiTableRow, null, _react.default.createElement(_table_row_cell.EuiTableRowCell, null, "Bye"))));

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});