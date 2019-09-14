import React from 'react';
import { render, mount } from 'enzyme';
import { findTestSubject } from '../../test';
import { EuiFocusTrap } from './focus_trap';
import { EuiPortal } from '../portal';
describe('EuiFocusTrap', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFocusTrap, null, React.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  test('can be disabled', function () {
    var component = render(React.createElement(EuiFocusTrap, {
      disabled: true
    }, React.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  describe('behavior', function () {
    describe('focus', function () {
      test('is set on the first focusable element by default', function () {
        var component = mount(React.createElement("div", null, React.createElement("input", {
          "data-test-subj": "outside"
        }), React.createElement(EuiFocusTrap, null, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        })))));
        expect(findTestSubject(component, 'input').getDOMNode()).toBe(document.activeElement);
      });
      test('will blur focus when negating `autoFocus`', function () {
        mount(React.createElement("div", null, React.createElement("input", {
          "data-test-subj": "outside"
        }), React.createElement(EuiFocusTrap, {
          autoFocus: false
        }, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        })))));
        expect(document.body).toBe(document.activeElement);
      });
      test('is set on the element identified by `data-autofocus`', function () {
        var component = mount(React.createElement("div", null, React.createElement("input", {
          "data-test-subj": "outside"
        }), React.createElement(EuiFocusTrap, null, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-autofocus": true,
          "data-test-subj": "input2"
        })))));
        expect(findTestSubject(component, 'input2').getDOMNode()).toBe(document.activeElement);
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
        var component = mount(React.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, React.createElement(EuiFocusTrap, null, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        }))), React.createElement("button", {
          "data-test-subj": "outside"
        }))); // The existence of `data-focus-lock-disabled=false` indicates that the trap is enabled.

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        findTestSubject(component, 'outside').simulate('mousedown');
        findTestSubject(component, 'outside').simulate('mouseup'); // `react-focus-lock` relies on real DOM events to move focus about.
        // Exposed attributes are the most consistent way to attain its state.
        // See https://github.com/theKashey/react-focus-lock/blob/master/_tests/FocusLock.spec.js for the lib in use
        // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap remains enabled after internal clicks', function () {
        var component = mount(React.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, React.createElement(EuiFocusTrap, {
          clickOutsideDisables: true
        }, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        }))), React.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        findTestSubject(component, 'input2').simulate('mousedown');
        findTestSubject(component, 'input2').simulate('mouseup'); // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap remains enabled after internal portal clicks', function () {
        var component = mount(React.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, React.createElement(EuiFocusTrap, {
          clickOutsideDisables: true
        }, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        }), React.createElement(EuiPortal, null, React.createElement("input", {
          "data-test-subj": "input3"
        })))), React.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        findTestSubject(component, 'input3').simulate('mousedown');
        findTestSubject(component, 'input3').simulate('mouseup'); // Trap remains enabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
      });
      test('trap becomes disabled on outside clicks', function () {
        var component = mount(React.createElement("div", {
          onMouseDown: triggerDocumentMouseDown,
          onMouseUp: triggerDocumentMouseUp
        }, React.createElement(EuiFocusTrap, {
          clickOutsideDisables: true
        }, React.createElement("div", {
          "data-test-subj": "container"
        }, React.createElement("input", {
          "data-test-subj": "input"
        }), React.createElement("input", {
          "data-test-subj": "input2"
        }))), React.createElement("button", {
          "data-test-subj": "outside"
        })));
        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(1);
        findTestSubject(component, 'outside').simulate('mousedown');
        findTestSubject(component, 'outside').simulate('mouseup'); // Trap becomes disabled

        expect(component.find('[data-focus-lock-disabled=false]').length).toBe(0);
      });
    });
  });
});