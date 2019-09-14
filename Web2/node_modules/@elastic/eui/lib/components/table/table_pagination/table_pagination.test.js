"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _table_pagination = require("./table_pagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiTablePagination', function () {
  var paginationProps = {
    activePage: 1,
    pageCount: 5,
    onChangePage: jest.fn()
  };
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_pagination.EuiTablePagination, _extends({}, _required_props.requiredProps, paginationProps)));
    expect(component).toMatchSnapshot();
  });
  test('is rendered when hiding the per page options', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_pagination.EuiTablePagination, _extends({}, _required_props.requiredProps, paginationProps, {
      hidePerPageOptions: true
    })));
    expect(component).toMatchSnapshot();
  });
});