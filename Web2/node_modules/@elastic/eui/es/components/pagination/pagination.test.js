import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiPagination } from './pagination';
describe('EuiPagination', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiPagination, requiredProps));
    expect(component).toMatchSnapshot();
  });
});