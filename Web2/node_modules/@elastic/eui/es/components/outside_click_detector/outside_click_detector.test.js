import React from 'react';
import { render, mount } from 'enzyme';
import { EuiOutsideClickDetector } from './outside_click_detector';
describe('EuiOutsideClickDetector', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiOutsideClickDetector, {
      onOutsideClick: function onOutsideClick() {}
    }, React.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  describe('behavior', function () {
    test('nested detectors', function () {
      var unrelatedDetector = jest.fn();
      var parentDetector = jest.fn();
      var childDetector = jest.fn(); // enzyme doesn't mount the components into the global jsdom `document`
      // but that's where the click detector listener is,
      // pass the top-level mounted component's click event on to document

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

      var component = mount(React.createElement("div", {
        onMouseDown: triggerDocumentMouseDown,
        onMouseUp: triggerDocumentMouseUp
      }, React.createElement("div", null, React.createElement(EuiOutsideClickDetector, {
        onOutsideClick: parentDetector
      }, React.createElement("div", null, React.createElement(EuiOutsideClickDetector, {
        onOutsideClick: childDetector
      }, React.createElement("div", {
        "data-test-subj": "target"
      }))))), React.createElement(EuiOutsideClickDetector, {
        onOutsideClick: unrelatedDetector
      }, React.createElement("div", null))));
      component.find('[data-test-subj="target"]').simulate('mousedown');
      component.find('[data-test-subj="target"]').simulate('mouseup');
      expect(unrelatedDetector).toHaveBeenCalledTimes(1);
      expect(parentDetector).toHaveBeenCalledTimes(0);
      expect(childDetector).toHaveBeenCalledTimes(0);
    });
  });
});