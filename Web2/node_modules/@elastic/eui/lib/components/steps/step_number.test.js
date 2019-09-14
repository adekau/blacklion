"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _step_number = require("./step_number");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiStepNumber', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_step_number.EuiStepNumber, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isHollow', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_step_number.EuiStepNumber, {
          number: 1,
          isHollow: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('status', function () {
      _step_number.STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_step_number.EuiStepNumber, {
            number: 1,
            status: status
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});