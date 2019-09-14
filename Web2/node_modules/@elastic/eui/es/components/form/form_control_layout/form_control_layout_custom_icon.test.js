import React from 'react';
import { render } from 'enzyme';
import { EuiFormControlLayoutCustomIcon } from './form_control_layout_custom_icon';
describe('EuiFormControlLayoutCustomIcon', function () {
  test('is rendered as button', function () {
    var props = {
      onClick: function onClick() {
        return null;
      },
      className: 'customClass',
      'data-test-subj': 'customIcon',
      type: 'alert',
      iconRef: 'icon'
    };
    var component = render(React.createElement(EuiFormControlLayoutCustomIcon, props));
    expect(component).toMatchSnapshot();
  });
  test('is rendered as span', function () {
    var props = {
      className: 'customClass',
      'data-test-subj': 'customIcon',
      type: 'alert',
      iconRef: 'icon'
    };
    var component = render(React.createElement(EuiFormControlLayoutCustomIcon, props));
    expect(component).toMatchSnapshot();
  });
});