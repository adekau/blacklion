"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _beta_badge = require("./beta_badge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiBetaBadge', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_beta_badge.EuiBetaBadge, _extends({
      label: "Beta"
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});