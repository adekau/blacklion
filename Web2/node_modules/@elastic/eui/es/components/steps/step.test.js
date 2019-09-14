function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiStep } from './step';
import { STATUS } from './step_number';
describe('EuiStep', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiStep, _extends({}, requiredProps, {
      title: 'First step'
    }), React.createElement("p", null, "Do this")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('headingElement', function () {
      var component = render(React.createElement(EuiStep, {
        headingElement: 'h3',
        title: 'First step'
      }, React.createElement("p", null, "Do this")));
      expect(component).toMatchSnapshot();
    });
    test('step', function () {
      var component = render(React.createElement(EuiStep, {
        step: 5,
        title: 'First step'
      }, React.createElement("p", null, "Do this")));
      expect(component).toMatchSnapshot();
    });
    describe('status', function () {
      STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = render(React.createElement(EuiStep, {
            status: status,
            title: 'First step'
          }, React.createElement("p", null, "Do this")));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});