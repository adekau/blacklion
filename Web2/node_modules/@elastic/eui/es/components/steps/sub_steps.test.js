import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiSubSteps } from './sub_steps';
describe('EuiSubSteps', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSubSteps, requiredProps));
    expect(component).toMatchSnapshot();
  });
});