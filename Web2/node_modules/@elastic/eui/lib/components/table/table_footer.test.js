"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_footer = require("./table_footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableFooter', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_footer.EuiTableFooter, _required_props.requiredProps, "children"));
    expect(component).toMatchSnapshot();
  });
});