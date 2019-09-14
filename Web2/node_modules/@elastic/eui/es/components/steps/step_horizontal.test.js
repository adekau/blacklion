function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { STATUS } from './step_number';
import { EuiStepHorizontal } from './step_horizontal';
describe('EuiStepHorizontal', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiStepHorizontal, _extends({}, requiredProps, {
      onClick: function onClick() {}
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('step', function () {
      var component = render(React.createElement(EuiStepHorizontal, {
        step: 5,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('title', function () {
      var component = render(React.createElement(EuiStepHorizontal, {
        title: 'First step',
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('isSelected', function () {
      var component = render(React.createElement(EuiStepHorizontal, {
        isSelected: true,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('isComplete', function () {
      var component = render(React.createElement(EuiStepHorizontal, {
        isComplete: true,
        onClick: function onClick() {}
      }));
      expect(component).toMatchSnapshot();
    });
    describe('status', function () {
      STATUS.forEach(function (status) {
        test("".concat(status, " is rendered"), function () {
          var component = render(React.createElement(EuiStepHorizontal, {
            status: status,
            onClick: function onClick() {}
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('onClick', function () {
      test('is called when clicked', function () {
        var onClickHandler = jest.fn();
        var component = mount(React.createElement(EuiStepHorizontal, {
          step: 1,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).toBeCalledTimes(1);
      });
      test("isn't called when clicked if it's disabled", function () {
        var onClickHandler = jest.fn();
        var component = mount(React.createElement(EuiStepHorizontal, {
          disabled: true,
          step: 1,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).not.toBeCalled();
      });
    });
  });
});