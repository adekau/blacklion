"use strict";

var _with_required_prop = require("./with_required_prop");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('withRequiredProp', function () {
  it('warns when the underlying prop validator fails', function () {
    expect(function () {
      _propTypes.default.checkPropTypes({
        exampleProp: (0, _with_required_prop.withRequiredProp)(_propTypes.default.string, 'requiredProp')
      }, {
        exampleProp: 15
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('warns when the base prop is present and valid but the required prop is missing', function () {
    expect(function () {
      _propTypes.default.checkPropTypes({
        exampleProp: (0, _with_required_prop.withRequiredProp)(_propTypes.default.string, 'requiredProp')
      }, {
        exampleProp: 'hello'
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('warns with a custom message when validation fails', function () {
    expect(function () {
      _propTypes.default.checkPropTypes({
        exampleProp: (0, _with_required_prop.withRequiredProp)(_propTypes.default.string, 'requiredProp', 'a custom message')
      }, {
        exampleProp: 'hello'
      }, 'exampleProp', 'ExampleComponent');
    }).toThrowErrorMatchingSnapshot();
  });
  it('does not warn when the base property is missing', function () {
    expect(function () {
      _propTypes.default.checkPropTypes({
        exampleProp: (0, _with_required_prop.withRequiredProp)(_propTypes.default.string, 'requiredProp')
      }, {}, 'exampleProp', 'ExampleComponent');
    }).not.toThrow();
  });
  it('does not warn when both the base property and required properties exist', function () {
    expect(function () {
      _propTypes.default.checkPropTypes({
        exampleProp: (0, _with_required_prop.withRequiredProp)(_propTypes.default.string, 'requiredProp'),
        requiredProp: _propTypes.default.number
      }, {
        exampleProp: 'hello',
        requiredProp: 5
      }, 'exampleProp', 'ExampleComponent');
    }).not.toThrow();
  });
});