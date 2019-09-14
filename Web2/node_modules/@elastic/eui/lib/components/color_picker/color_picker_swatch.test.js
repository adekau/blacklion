"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _color_picker_swatch = require("./color_picker_swatch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiColorPickerSwatch', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_color_picker_swatch.EuiColorPickerSwatch, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});