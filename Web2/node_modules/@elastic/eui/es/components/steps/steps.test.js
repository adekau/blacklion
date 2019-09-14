function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiSteps } from './steps';
var steps = [{
  title: 'first title',
  children: React.createElement("p", null, "Do this first")
}, {
  title: 'second title',
  children: React.createElement("p", null, "Then this")
}, {
  title: 'third title',
  children: React.createElement("p", null, "And finally, do this"),
  status: 'incomplete'
}];
describe('EuiSteps', function () {
  test('renders steps', function () {
    var component = render(React.createElement(EuiSteps, _extends({}, requiredProps, {
      steps: steps
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders steps with firstStepNumber', function () {
    var component = render(React.createElement(EuiSteps, _extends({}, requiredProps, {
      steps: steps,
      firstStepNumber: 10
    })));
    expect(component).toMatchSnapshot();
  });
  test('renders step title inside "headingElement" element', function () {
    var component = render(React.createElement(EuiSteps, _extends({}, requiredProps, {
      steps: steps,
      headingElement: "h2"
    })));
    expect(component).toMatchSnapshot();
  });
});