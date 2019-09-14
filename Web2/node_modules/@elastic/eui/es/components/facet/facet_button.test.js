import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiFacetButton } from './facet_button';
import { EuiIcon } from '../icon';
describe('EuiFacetButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFacetButton, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetButton, {
          isDisabled: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isLoading', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetButton, {
          isLoading: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isSelected', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetButton, {
          isSelected: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('quantity', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetButton, {
          quantity: 60
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('icon', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetButton, {
          icon: React.createElement(EuiIcon, {
            type: "dot"
          })
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiFacetButton, {
          onClick: handler
        }, "Content"));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});