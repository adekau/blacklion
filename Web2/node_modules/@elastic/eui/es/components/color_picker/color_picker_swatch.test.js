import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiColorPickerSwatch } from './color_picker_swatch';
describe('EuiColorPickerSwatch', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiColorPickerSwatch, requiredProps));
    expect(component).toMatchSnapshot();
  });
});