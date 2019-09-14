import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { STATUS, EuiStepNumber } from './step_number';
describe('EuiStepNumber', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiStepNumber, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isHollow', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiStepNumber, {
          number: 1,
          isHollow: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('status', function () {
      STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = render(React.createElement(EuiStepNumber, {
            number: 1,
            status: status
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});