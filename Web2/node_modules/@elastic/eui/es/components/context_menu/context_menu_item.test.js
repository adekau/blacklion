function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiContextMenuItem } from './context_menu_item';
describe('EuiContextMenuItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiContextMenuItem, requiredProps, "Hello"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('icon', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiContextMenuItem, {
          icon: React.createElement("span", {
            className: "euiIcon fa-user"
          })
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('disabled', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiContextMenuItem, {
          disabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      test('renders a button', function () {
        var component = render(React.createElement(EuiContextMenuItem, _extends({}, requiredProps, {
          onClick: function onClick() {}
        })));
        expect(component).toMatchSnapshot();
      });
      test("isn't called upon instantiation", function () {
        var onClickHandler = jest.fn();
        shallow(React.createElement(EuiContextMenuItem, {
          onClick: onClickHandler
        }));
        expect(onClickHandler).not.toHaveBeenCalled();
      });
      test('is called when the item is clicked', function () {
        var onClickHandler = jest.fn();
        var component = shallow(React.createElement(EuiContextMenuItem, {
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
      });
      test('is not called when the item is clicked but set to disabled', function () {
        var onClickHandler = jest.fn();
        var component = mount(React.createElement(EuiContextMenuItem, {
          disabled: true,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).not.toHaveBeenCalled();
      });
    });
    describe('href', function () {
      test('renders a link', function () {
        var component = render(React.createElement(EuiContextMenuItem, _extends({}, requiredProps, {
          href: "url"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('rel', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiContextMenuItem, _extends({}, requiredProps, {
          href: "url",
          rel: "help"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('target', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiContextMenuItem, _extends({}, requiredProps, {
          href: "url",
          target: "_blank"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('hasPanel', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiContextMenuItem, {
          hasPanel: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});