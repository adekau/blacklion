function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

import PropTypes from "prop-types";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { mount } from 'enzyme';
import { EuiMutationObserver } from './mutation_observer';
import { sleep } from '../../../test';
export function waitforMutationObserver() {
  return _waitforMutationObserver.apply(this, arguments);
}

function _waitforMutationObserver() {
  _waitforMutationObserver = _asyncToGenerator(
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
            return sleep(period);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _waitforMutationObserver.apply(this, arguments);
}

describe('EuiMutationObserver', function () {
  it('watches for a mutation',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var onMutation, Wrapper, component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            onMutation = jest.fn();

            Wrapper = function Wrapper(_ref2) {
              var value = _ref2.value;
              return React.createElement(EuiMutationObserver, {
                observerOptions: {
                  attributes: true
                },
                onMutation: onMutation
              }, function (mutationRef) {
                return React.createElement("div", {
                  ref: mutationRef,
                  "data-test-ref": value
                }, "Hello World");
              });
            };

            Wrapper.propTypes = {
              value: PropTypes.number.isRequired
            };
            component = mount(React.createElement(Wrapper, {
              value: 5
            }));
            component.setProps({
              value: 6
            });
            _context.next = 8;
            return waitforMutationObserver();

          case 8:
            expect(onMutation).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
});