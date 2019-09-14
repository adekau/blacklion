"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _tool_tip = require("./tool_tip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiToolTip', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tool_tip.EuiToolTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, _test.requiredProps), _react.default.createElement("button", null, "Trigger")));
    expect(component).toMatchSnapshot();
  });
  test('shows tooltip on focus', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_tool_tip.EuiToolTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, _test.requiredProps), _react.default.createElement("button", {
      "data-test-subj": "trigger"
    }, "Trigger")));
    var trigger = (0, _test.findTestSubject)(component, 'trigger');
    trigger.simulate('focus');
    expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot();
  });
});