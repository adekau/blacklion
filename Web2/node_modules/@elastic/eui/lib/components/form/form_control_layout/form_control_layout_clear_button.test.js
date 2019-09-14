"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _form_control_layout_clear_button = require("./form_control_layout_clear_button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFormControlLayoutClearButton', function () {
  test('is rendered', function () {
    var clear = {
      onClick: function onClick() {
        return null;
      },
      className: 'customClass',
      'data-test-subj': 'clearButton'
    };
    var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_clear_button.EuiFormControlLayoutClearButton, clear));
    expect(component).toMatchSnapshot();
  });
});