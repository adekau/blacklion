"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _table_row_cell_checkbox = require("./table_row_cell_checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableRowCellCheckbox', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_row_cell_checkbox.EuiTableRowCellCheckbox, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});