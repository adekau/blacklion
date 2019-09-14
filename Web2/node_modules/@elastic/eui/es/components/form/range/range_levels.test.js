function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiRangeLevels } from './range_levels';
describe('EuiRangeLevels', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiRangeLevels, _extends({
      min: 0,
      max: 100,
      showTicks: true,
      levels: [{
        min: 0,
        max: 20,
        color: 'danger'
      }, {
        min: 20,
        max: 100,
        color: 'success'
      }]
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('should throw error if `level.min` is lower than `min`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeLevels, {
        min: 0,
        max: 100,
        levels: [{
          min: -10,
          max: 20,
          color: 'danger'
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if `level.max` is higher than `max`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeLevels, {
        min: 0,
        max: 100,
        levels: [{
          min: 20,
          max: 200,
          color: 'danger'
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});