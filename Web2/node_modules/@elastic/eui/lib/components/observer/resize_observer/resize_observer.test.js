"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitforResizeObserver = waitforResizeObserver;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _resize_observer = require("./resize_observer");

var _test = require("../../../test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function waitforResizeObserver() {
  return _waitforResizeObserver.apply(this, arguments);
}

function _waitforResizeObserver() {
  _waitforResizeObserver = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var period,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            period = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 30;
            _context2.next = 3;
            return (0, _test.sleep)(period);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _waitforResizeObserver.apply(this, arguments);
}

describe('EuiResizeObserver', function () {
  it('watches for a resize',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var onResize, Wrapper, component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            onResize = jest.fn();

            Wrapper = function Wrapper(_ref2) {
              var children = _ref2.children;
              return _react.default.createElement(_resize_observer.EuiResizeObserver, {
                onResize: onResize
              }, function (resizeRef) {
                return _react.default.createElement("div", {
                  ref: resizeRef
                }, children);
              });
            };

            Wrapper.propTypes = {};
            component = (0, _enzyme.mount)(_react.default.createElement(Wrapper, {
              children: _react.default.createElement("div", null, "Hello World")
            }));
            component.setProps({
              children: _react.default.createElement("div", null, _react.default.createElement("div", null, "Hello World"), _react.default.createElement("div", null, "Hello Again"))
            });
            _context.next = 8;
            return waitforResizeObserver();

          case 8:
            // Expect 2 calls because it's called once on mount
            expect(onResize).toHaveBeenCalledTimes(2);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
});