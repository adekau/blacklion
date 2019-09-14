function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiRangeTrack } from './range_track';
describe('EuiRangeTrack', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiRangeTrack, _extends({
      min: 0,
      max: 100,
      step: 10,
      showTicks: true,
      value: "10",
      onChange: function onChange() {}
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('should throw error if `max` does not line up with `step` interval', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 105,
        step: 10
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if there are too many ticks to render', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 21,
        showTicks: true
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if `tickInterval` is off sequence from `step`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 100,
        step: 10,
        showTicks: true,
        tickInterval: 3
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is lower than `min`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 100,
        showTicks: true,
        ticks: [{
          label: '-100',
          value: -100
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is higher than `max`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 100,
        showTicks: true,
        ticks: [{
          label: '200',
          value: 200
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
  test('should throw error if custom tick value is off sequence from `step`', function () {
    var component = function component() {
      return render(React.createElement(EuiRangeTrack, {
        min: 0,
        max: 100,
        step: 50,
        showTicks: true,
        ticks: [{
          label: '10',
          value: 10
        }]
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});