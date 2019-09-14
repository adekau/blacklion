"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _sub_steps = require("./sub_steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiSubSteps', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_sub_steps.EuiSubSteps, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});