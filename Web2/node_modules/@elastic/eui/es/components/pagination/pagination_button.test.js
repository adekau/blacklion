import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiPaginationButton } from './pagination_button';
describe('EuiPaginationButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiPaginationButton, requiredProps));
    expect(component).toMatchSnapshot();
  });
});