"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _facet_button = require("./facet_button");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFacetButton', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, {
          isDisabled: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isLoading', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, {
          isLoading: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isSelected', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, {
          isSelected: true
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('quantity', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, {
          quantity: 60
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('icon', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_facet_button.EuiFacetButton, {
          icon: _react.default.createElement(_icon.EuiIcon, {
            type: "dot"
          })
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_facet_button.EuiFacetButton, {
          onClick: handler
        }, "Content"));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});