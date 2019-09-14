function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiTablePagination } from './table_pagination';
describe('EuiTablePagination', function () {
  var paginationProps = {
    activePage: 1,
    pageCount: 5,
    onChangePage: jest.fn()
  };
  test('is rendered', function () {
    var component = render(React.createElement(EuiTablePagination, _extends({}, requiredProps, paginationProps)));
    expect(component).toMatchSnapshot();
  });
  test('is rendered when hiding the per page options', function () {
    var component = render(React.createElement(EuiTablePagination, _extends({}, requiredProps, paginationProps, {
      hidePerPageOptions: true
    })));
    expect(component).toMatchSnapshot();
  });
});