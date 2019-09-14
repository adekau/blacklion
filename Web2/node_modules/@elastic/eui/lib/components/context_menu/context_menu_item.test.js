"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _context_menu_item = require("./context_menu_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiContextMenuItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, _required_props.requiredProps, "Hello"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('icon', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          icon: _react.default.createElement("span", {
            className: "euiIcon fa-user"
          })
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('disabled', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          disabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      test('renders a button', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, _extends({}, _required_props.requiredProps, {
          onClick: function onClick() {}
        })));
        expect(component).toMatchSnapshot();
      });
      test("isn't called upon instantiation", function () {
        var onClickHandler = jest.fn();
        (0, _enzyme.shallow)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          onClick: onClickHandler
        }));
        expect(onClickHandler).not.toHaveBeenCalled();
      });
      test('is called when the item is clicked', function () {
        var onClickHandler = jest.fn();
        var component = (0, _enzyme.shallow)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
      });
      test('is not called when the item is clicked but set to disabled', function () {
        var onClickHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          disabled: true,
          onClick: onClickHandler
        }));
        component.simulate('click');
        expect(onClickHandler).not.toHaveBeenCalled();
      });
    });
    describe('href', function () {
      test('renders a link', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, _extends({}, _required_props.requiredProps, {
          href: "url"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('rel', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, _extends({}, _required_props.requiredProps, {
          href: "url",
          rel: "help"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('target', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, _extends({}, _required_props.requiredProps, {
          href: "url",
          target: "_blank"
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('hasPanel', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
          hasPanel: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});