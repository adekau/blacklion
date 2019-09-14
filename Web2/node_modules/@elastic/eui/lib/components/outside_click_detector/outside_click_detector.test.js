"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _outside_click_detector = require("./outside_click_detector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiOutsideClickDetector', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
      onOutsideClick: function onOutsideClick() {}
    }, _react.default.createElement("div", null)));
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

      var component = (0, _enzyme.mount)(_react.default.createElement("div", {
        onMouseDown: triggerDocumentMouseDown,
        onMouseUp: triggerDocumentMouseUp
      }, _react.default.createElement("div", null, _react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
        onOutsideClick: parentDetector
      }, _react.default.createElement("div", null, _react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
        onOutsideClick: childDetector
      }, _react.default.createElement("div", {
        "data-test-subj": "target"
      }))))), _react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
        onOutsideClick: unrelatedDetector
      }, _react.default.createElement("div", null))));
      component.find('[data-test-subj="target"]').simulate('mousedown');
      component.find('[data-test-subj="target"]').simulate('mouseup');
      expect(unrelatedDetector).toHaveBeenCalledTimes(1);
      expect(parentDetector).toHaveBeenCalledTimes(0);
      expect(childDetector).toHaveBeenCalledTimes(0);
    });
  });
});