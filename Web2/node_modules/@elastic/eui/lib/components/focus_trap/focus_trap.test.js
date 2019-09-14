"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _focus_trap = require("./focus_trap");

var _portal = require("../portal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFocusTrap', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_focus_trap.EuiFocusTrap, null, _react.default.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  test('can be disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_focus_trap.EuiFocusTrap, {
      disabled: true
    }, _react.default.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  describe('behavior', function () {
    describe('focus', function () {
      test('is set on the first focusable element by default', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement("input", {
          "data-test-subj": "outside"
        }), _react.default.createElement(_focus_trap.EuiFocusTrap, null, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        })))));
        expect((0, _test.findTestSubject)(component, 'input').getDOMNode()).toBe(document.activeElement);
      });
      test('will blur focus when negating `autoFocus`', function () {
        (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement("input", {
          "data-test-subj": "outside"
        }), _react.default.createElement(_focus_trap.EuiFocusTrap, {
          autoFocus: false
        }, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        })))));
        expect(document.body).toBe(document.activeElement);
      });
      test('is set on the element identified by `data-autofocus`', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement("input", {
          "data-test-subj": "outside"
        }), _react.default.createElement(_focus_trap.EuiFocusTrap, null, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-autofocus": true,
          "data-test-subj": "input2"
        })))));
        expect((0, _test.findTestSubject)(component, 'input2').getDOMNode()).toBe(document.activeElement);
      });
    });
    describe('clickOutsideDisables', function () {
      // enzyme doesn't mount the components into the global jsdom `document`
      // but that's where the click detector listener is,
      var triggerDocumentMouseDown = function triggerDocumentMouseDown(e) {
        var event = new Event('mousedown');
        event.euiGeneratedBy = e.nativeEvent.euiGeneratedBy;
        document.dispatchEvent(event);
      };

      var triggerDocumentMouseUp = function triggerDocumentMouseUp(e) {
        var event = new Event('mouseup');
        event.euiGeneratedBy = e.nativeEvent.euiGeneratedBy;
        document.dispatchEvent(event);
      };

      test('trap remains enabled when false', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, _react.default.createElement(_focus_trap.EuiFocusTrap, null, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        }))), _react.default.createElement("button", {
          "data-test-subj": "outside"
        }))); // The existence of `data-focus-lock-disabled=false` indicates that the trap is enabled.

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        (0, _test.findTestSubject)(component, 'outside').simulate('mousedown');
        (0, _test.findTestSubject)(component, 'outside').simulate('mouseup'); // `react-focus-lock` relies on real DOM events to move focus about.
        // Exposed attributes are the most consistent way to attain its state.
        // See https://github.com/theKashey/react-focus-lock/blob/master/_tests/FocusLock.spec.js for the lib in use
        // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap remains enabled after internal clicks', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, _react.default.createElement(_focus_trap.EuiFocusTrap, {
          clickOutsideDisables: true
        }, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        }))), _react.default.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        (0, _test.findTestSubject)(component, 'input2').simulate('mousedown');
        (0, _test.findTestSubject)(component, 'input2').simulate('mouseup'); // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap remains enabled after internal portal clicks', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, _react.default.createElement(_focus_trap.EuiFocusTrap, {
          clickOutsideDisables: true
        }, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        }), _react.default.createElement(_portal.EuiPortal, null, _react.default.createElement("input", {
          "data-test-subj": "input3"
        })))), _react.default.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        (0, _test.findTestSubject)(component, 'input3').simulate('mousedown');
        (0, _test.findTestSubject)(component, 'input3').simulate('mouseup'); // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap becomes disabled on outside clicks', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, _react.default.createElement(_focus_trap.EuiFocusTrap, {
          clickOutsideDisables: true
        }, _react.default.createElement("div", {
          "data-test-subj": "container"
        }, _react.default.createElement("input", {
          "data-test-subj": "input"
        }), _react.default.createElement("input", {
          "data-test-subj": "input2"
        }))), _react.default.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        (0, _test.findTestSubject)(component, 'outside').simulate('mousedown');
        (0, _test.findTestSubject)(component, 'outside').simulate('mouseup'); // Trap becomes disabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(0);
      });
    });
  });
});