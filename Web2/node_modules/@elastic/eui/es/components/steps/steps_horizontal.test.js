function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiStepsHorizontal } from './steps_horizontal';
var steps = [{
  title: 'Completed Step 1',
  isComplete: true,
  onClick: function onClick() {}
}, {
  title: 'Selected Step 2',
  isSelected: true,
  onClick: function onClick() {}
}, {
  title: 'Incomplete Step 3',
  onClick: function onClick() {}
}, {
  title: 'Disabled Step 4',
  disabled: true,
  onClick: function onClick() {}
}];
describe('EuiStepsHorizontal', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiStepsHorizontal, _extends({}, requiredProps, {
      steps: steps
    })));
    expect(component).toMatchSnapshot();
  });
});