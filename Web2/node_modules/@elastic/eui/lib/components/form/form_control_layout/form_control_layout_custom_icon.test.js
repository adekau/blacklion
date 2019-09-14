"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _form_control_layout_custom_icon = require("./form_control_layout_custom_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_custom_icon.EuiFormControlLayoutCustomIcon, props));
    expect(component).toMatchSnapshot();
  });
  test('is rendered as span', function () {
    var props = {
      className: 'customClass',
      'data-test-subj': 'customIcon',
      type: 'alert',
      iconRef: 'icon'
    };
    var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_custom_icon.EuiFormControlLayoutCustomIcon, props));
    expect(component).toMatchSnapshot();
  });
});