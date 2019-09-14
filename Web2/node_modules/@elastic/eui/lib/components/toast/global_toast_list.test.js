"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _global_toast_list = require("./global_toast_list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.useFakeTimers();
describe('EuiGlobalToastList', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_global_toast_list.EuiGlobalToastList, _extends({}, _test.requiredProps, {
      dismissToast: function dismissToast() {},
      toastLifeTimeMs: 5
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('toasts', function () {
      test('is rendered', function () {
        var toasts = [{
          title: 'A',
          text: 'a',
          color: 'success',
          iconType: 'check',
          'data-test-subj': 'a',
          id: 'a'
        }, {
          title: 'B',
          text: 'b',
          color: 'danger',
          iconType: 'alert',
          'data-test-subj': 'b',
          id: 'b'
        }];
        var component = (0, _enzyme.render)(_react.default.createElement(_global_toast_list.EuiGlobalToastList, {
          toasts: toasts,
          dismissToast: function dismissToast() {},
          toastLifeTimeMs: 5
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('dismissToast', function () {
      test('is called when a toast is clicked', function () {
        var dismissToastSpy = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_global_toast_list.EuiGlobalToastList, {
          toasts: [{
            'data-test-subj': 'b',
            id: 'b'
          }],
          dismissToast: dismissToastSpy,
          toastLifeTimeMs: 100
        }));
        var toastB = (0, _test.findTestSubject)(component, 'b');
        var closeButton = (0, _test.findTestSubject)(toastB, 'toastCloseButton');
        closeButton.simulate('click');
        jest.advanceTimersByTime(_global_toast_list.TOAST_FADE_OUT_MS - 1);
        expect(dismissToastSpy).not.toBeCalled();
        jest.advanceTimersByTime(1);
        expect(dismissToastSpy).toBeCalled();
      });
      test('is called when the toast lifetime elapses', function () {
        var TOAST_LIFE_TIME_MS = 5;
        var dismissToastSpy = jest.fn();
        (0, _enzyme.mount)(_react.default.createElement(_global_toast_list.EuiGlobalToastList, {
          toasts: [{
            'data-test-subj': 'b',
            id: 'b'
          }],
          dismissToast: dismissToastSpy,
          toastLifeTimeMs: TOAST_LIFE_TIME_MS
        }));
        jest.advanceTimersByTime(TOAST_LIFE_TIME_MS + _global_toast_list.TOAST_FADE_OUT_MS - 1);
        expect(dismissToastSpy).not.toBeCalled();
        jest.advanceTimersByTime(1);
        expect(dismissToastSpy).toBeCalled();
      });
      test('toastLifeTimeMs is overrideable by individidual toasts', function () {
        var TOAST_LIFE_TIME_MS = 10;
        var TOAST_LIFE_TIME_MS_OVERRIDE = 100;
        var dismissToastSpy = jest.fn();
        (0, _enzyme.mount)(_react.default.createElement(_global_toast_list.EuiGlobalToastList, {
          toasts: [{
            'data-test-subj': 'b',
            id: 'b',
            toastLifeTimeMs: TOAST_LIFE_TIME_MS_OVERRIDE
          }],
          dismissToast: dismissToastSpy,
          toastLifeTimeMs: TOAST_LIFE_TIME_MS
        }));
        var notYetTime = TOAST_LIFE_TIME_MS + _global_toast_list.TOAST_FADE_OUT_MS;
        var nowItsTime = TOAST_LIFE_TIME_MS_OVERRIDE + _global_toast_list.TOAST_FADE_OUT_MS;
        jest.advanceTimersByTime(notYetTime);
        expect(dismissToastSpy).not.toBeCalled();
        jest.advanceTimersByTime(nowItsTime - notYetTime);
        expect(dismissToastSpy).toBeCalled();
      });
    });
  });
});