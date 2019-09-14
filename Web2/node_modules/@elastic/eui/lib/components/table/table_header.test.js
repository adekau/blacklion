"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_header = require("./table_header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableHeader', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_header.EuiTableHeader, _required_props.requiredProps, "children"));
    expect(component).toMatchSnapshot();
  });
});