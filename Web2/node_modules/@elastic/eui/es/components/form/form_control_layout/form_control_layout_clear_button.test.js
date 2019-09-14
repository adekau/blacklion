import React from 'react';
import { render } from 'enzyme';
import { EuiFormControlLayoutClearButton } from './form_control_layout_clear_button';
describe('EuiFormControlLayoutClearButton', function () {
  test('is rendered', function () {
    var clear = {
      onClick: function onClick() {
        return null;
      },
      className: 'customClass',
      'data-test-subj': 'clearButton'
    };
    var component = render(React.createElement(EuiFormControlLayoutClearButton, clear));
    expect(component).toMatchSnapshot();
  });
});