"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_row = require("./table_row");

var _table_row_cell = require("./table_row_cell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiTableRow', function () {
  var component = _react.default.createElement(_table_row.EuiTableRow, _required_props.requiredProps, _react.default.createElement(_table_row_cell.EuiTableRowCell, null, "hi"));

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});
describe('isSelected', function () {
  test('renders true when specified', function () {
    var component = _react.default.createElement(_table_row.EuiTableRow, {
      isSelected: true
    }, _react.default.createElement(_table_row_cell.EuiTableRowCell, null));

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});