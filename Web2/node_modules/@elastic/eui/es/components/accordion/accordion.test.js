function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiAccordion } from './accordion';
var id = 0;

var getId = function getId() {
  return "".concat(id++);
};

describe('EuiAccordion', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiAccordion, _extends({
      id: getId()
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('buttonContentClassName', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAccordion, {
          id: getId(),
          buttonContentClassName: "button content class name"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('buttonContent', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAccordion, {
          id: getId(),
          buttonContent: React.createElement("div", null, "Button content")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('extraAction', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAccordion, {
          id: getId(),
          extraAction: React.createElement("button", null, "Extra action")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('initialIsOpen', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiAccordion, {
          id: getId(),
          initialIsOpen: true
        }, React.createElement("p", null, "You can see me.")));
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('behavior', function () {
    it('opens when clicked once', function () {
      var component = mount(React.createElement(EuiAccordion, {
        id: getId()
      }));
      component.find('button').simulate('click');
      expect(component).toMatchSnapshot();
    });
    it('closes when clicked twice', function () {
      var component = mount(React.createElement(EuiAccordion, {
        id: getId()
      }));
      component.find('button').simulate('click');
      component.find('button').simulate('click');
      expect(component).toMatchSnapshot();
    });
    it('accepts and calls an optional callback on open and close', function () {
      var onToggleHandler = jest.fn();
      var component = mount(React.createElement(EuiAccordion, {
        id: getId(),
        onToggle: onToggleHandler
      }));
      component.find('button').simulate('click');
      expect(onToggleHandler).toBeCalled();
      expect(onToggleHandler).toBeCalledWith(true);
      component.find('button').simulate('click');
      expect(onToggleHandler).toBeCalled();
      expect(onToggleHandler).toBeCalledWith(false);
    });
  });
});