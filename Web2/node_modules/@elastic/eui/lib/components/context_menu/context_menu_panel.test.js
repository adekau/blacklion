"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _context_menu_panel = require("./context_menu_panel");

var _context_menu_item = require("./context_menu_item");

var _context_menu = require("./context_menu.test");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var items = [_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
  key: "A",
  "data-test-subj": "itemA"
}, "Option A"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
  key: "B",
  "data-test-subj": "itemB"
}, "Option B"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
  key: "C",
  "data-test-subj": "itemC"
}, "Option C")];
describe('EuiContextMenuPanel', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, _test.requiredProps, "Hello"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('title', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          title: "Title"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClose', function () {
      test('renders a button as a title', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          title: "Title",
          onClose: function onClose() {}
        }));
        expect(component).toMatchSnapshot();
      });
      test("isn't called upon instantiation", function () {
        var onCloseHandler = jest.fn();
        (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          title: "Title",
          onClose: onCloseHandler
        }));
        expect(onCloseHandler).not.toHaveBeenCalled();
      });
      test('is called when the title is clicked', function () {
        var onCloseHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          title: "Title",
          onClose: onCloseHandler
        }));
        component.find('button').simulate('click');
        expect(onCloseHandler).toHaveBeenCalledTimes(1);
      });
    });
    describe('onHeightChange', function () {
      it('is called with a height value', function () {
        var onHeightChange = jest.fn();
        (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          onHeightChange: onHeightChange
        }));
        expect(onHeightChange).toHaveBeenCalledWith(0);
      });
    });
    describe('transitionDirection', function () {
      describe('next', function () {
        describe('with transitionType', function () {
          describe('in', function () {
            test('is rendered', function () {
              var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
                transitionDirection: "next",
                transitionType: "in"
              }));
              expect(component).toMatchSnapshot();
            });
          });
          describe('out', function () {
            test('is rendered', function () {
              var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
                transitionDirection: "next",
                transitionType: "out"
              }));
              expect(component).toMatchSnapshot();
            });
          });
        });
      });
      describe('previous', function () {
        describe('with transitionType', function () {
          describe('in', function () {
            test('is rendered', function () {
              var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
                transitionDirection: "previous",
                transitionType: "in"
              }));
              expect(component).toMatchSnapshot();
            });
          });
          describe('out', function () {
            test('is rendered', function () {
              var component = (0, _enzyme.render)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
                transitionDirection: "previous",
                transitionType: "out"
              }));
              expect(component).toMatchSnapshot();
            });
          });
        });
      });
    });
    describe('initialFocusedItemIndex', function () {
      it('sets focus on the item occupying that index',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
                  items: items,
                  initialFocusedItemIndex: 1
                }));
                _context.next = 3;
                return (0, _context_menu.tick)(20);

              case 3:
                expect((0, _test.findTestSubject)(component, 'itemB').getDOMNode()).toBe(document.activeElement);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });
    describe('onUseKeyboardToNavigate', function () {
      it('is called when up arrow is pressed', function () {
        var onUseKeyboardToNavigateHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          items: items,
          onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
        }));
        component.simulate('keydown', {
          keyCode: _services.keyCodes.UP
        });
        expect(onUseKeyboardToNavigateHandler).toHaveBeenCalledTimes(1);
      });
      it('is called when down arrow is pressed', function () {
        var onUseKeyboardToNavigateHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          items: items,
          onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
        }));
        component.simulate('keydown', {
          keyCode: _services.keyCodes.UP
        });
        expect(onUseKeyboardToNavigateHandler).toHaveBeenCalledTimes(1);
      });
      describe('left arrow', function () {
        it('calls handler if showPreviousPanel exists', function () {
          var onUseKeyboardToNavigateHandler = jest.fn();
          var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
            items: items,
            showPreviousPanel: function showPreviousPanel() {},
            onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
          }));
          component.simulate('keydown', {
            keyCode: _services.keyCodes.LEFT
          });
          expect(onUseKeyboardToNavigateHandler).toHaveBeenCalledTimes(1);
        });
        it("doesn't call handler if showPreviousPanel doesn't exist", function () {
          var onUseKeyboardToNavigateHandler = jest.fn();
          var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
            items: items,
            onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
          }));
          component.simulate('keydown', {
            keyCode: _services.keyCodes.LEFT
          });
          expect(onUseKeyboardToNavigateHandler).not.toHaveBeenCalled();
        });
      });
      describe('right arrow', function () {
        it('calls handler if showNextPanel exists', function () {
          var onUseKeyboardToNavigateHandler = jest.fn();
          var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
            items: items,
            showNextPanel: function showNextPanel() {},
            onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
          }));
          component.simulate('keydown', {
            keyCode: _services.keyCodes.RIGHT
          });
          expect(onUseKeyboardToNavigateHandler).toHaveBeenCalledTimes(1);
        });
        it("doesn't call handler if showNextPanel doesn't exist", function () {
          var onUseKeyboardToNavigateHandler = jest.fn();
          var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
            items: items,
            onUseKeyboardToNavigate: onUseKeyboardToNavigateHandler
          }));
          component.simulate('keydown', {
            keyCode: _services.keyCodes.RIGHT
          });
          expect(onUseKeyboardToNavigateHandler).not.toHaveBeenCalled();
        });
      });
    });
  });
  describe('behavior', function () {
    describe('focus', function () {
      it('is set on the first focusable element by default if there are no items and hasFocus is true',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var component;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, null, _react.default.createElement("button", {
                  "data-test-subj": "button"
                })));
                _context2.next = 3;
                return (0, _context_menu.tick)(20);

              case 3:
                expect((0, _test.findTestSubject)(component, 'button').getDOMNode()).toBe(document.activeElement);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));
      it('is not set on anything if hasFocus is false', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          hasFocus: false
        }, _react.default.createElement("button", {
          "data-test-subj": "button"
        })));
        expect((0, _test.findTestSubject)(component, 'button').getDOMNode()).not.toBe(document.activeElement);
      });
    });
    describe('keyboard navigation of items', function () {
      var component;
      var showNextPanelHandler;
      var showPreviousPanelHandler;
      beforeEach(function () {
        showNextPanelHandler = jest.fn();
        showPreviousPanelHandler = jest.fn();
        component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          items: items,
          showNextPanel: showNextPanelHandler,
          showPreviousPanel: showPreviousPanelHandler
        }));
      });
      it('focuses the panel by default',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _context_menu.tick)(20);

              case 2:
                expect(component.getDOMNode()).toBe(document.activeElement);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
      it('down arrow key focuses the first menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.DOWN
                });
                _context4.next = 3;
                return (0, _context_menu.tick)(20);

              case 3:
                expect((0, _test.findTestSubject)(component, 'itemA').getDOMNode()).toBe(document.activeElement);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));
      it('subsequently, down arrow key focuses the next menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.DOWN
                });
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.DOWN
                });
                _context5.next = 4;
                return (0, _context_menu.tick)(20);

              case 4:
                expect((0, _test.findTestSubject)(component, 'itemB').getDOMNode()).toBe(document.activeElement);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));
      it('down arrow key wraps to first menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.UP
                });
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.DOWN
                });
                _context6.next = 4;
                return (0, _context_menu.tick)(20);

              case 4:
                expect((0, _test.findTestSubject)(component, 'itemA').getDOMNode()).toBe(document.activeElement);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));
      it('up arrow key focuses the last menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.UP
                });
                _context7.next = 3;
                return (0, _context_menu.tick)(20);

              case 3:
                expect((0, _test.findTestSubject)(component, 'itemC').getDOMNode()).toBe(document.activeElement);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      })));
      it('subsequently, up arrow key focuses the previous menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.UP
                });
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.UP
                });
                _context8.next = 4;
                return (0, _context_menu.tick)(20);

              case 4:
                expect((0, _test.findTestSubject)(component, 'itemB').getDOMNode()).toBe(document.activeElement);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      })));
      it('up arrow key wraps to last menu item',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.DOWN
                });
                component.simulate('keydown', {
                  keyCode: _services.keyCodes.UP
                });
                _context9.next = 4;
                return (0, _context_menu.tick)(20);

              case 4:
                expect((0, _test.findTestSubject)(component, 'itemC').getDOMNode()).toBe(document.activeElement);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      })));
      it("right arrow key shows next panel with focused item's index", function () {
        component.simulate('keydown', {
          keyCode: _services.keyCodes.DOWN
        });
        component.simulate('keydown', {
          keyCode: _services.keyCodes.RIGHT
        });
        expect(showNextPanelHandler).toHaveBeenCalledWith(0);
      });
      it('left arrow key shows previous panel', function () {
        component.simulate('keydown', {
          keyCode: _services.keyCodes.LEFT
        });
        expect(showPreviousPanelHandler).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('updating items and content', function () {
    describe('updates to items', function () {
      it("should not re-render if any items's watchedItemProps did not change", function () {
        expect.assertions(2); // make sure the assertion in the `setProps` callback is executed
        // by not passing `watchedItemProps` no changes to items should cause a re-render

        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          items: [_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "A",
            "data-counter": 0
          }, "Option A"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "B",
            "data-counter": 1
          }, "Option B")]
        }));
        expect(component.debug()).toMatchSnapshot();
        component.setProps({
          items: [_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "A",
            "data-counter": 2
          }, "Option A"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "B",
            "data-counter": 3
          }, "Option B")]
        }, function () {
          expect(component.debug()).toMatchSnapshot();
        });
      });
      it("should re-render if any items's watchedItemProps did change", function () {
        expect.assertions(2); // make sure the assertion in the `setProps` callback is executed
        // by referencing the `data-counter` property in `watchedItemProps`
        // changes to the items should be picked up and re-rendered

        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, {
          watchedItemProps: ['data-counter'],
          items: [_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "A",
            "data-counter": 0
          }, "Option A"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "B",
            "data-counter": 1
          }, "Option B")]
        }));
        expect(component.debug()).toMatchSnapshot();
        component.setProps({
          items: [_react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "A",
            "data-counter": 2
          }, "Option A"), _react.default.createElement(_context_menu_item.EuiContextMenuItem, {
            key: "B",
            "data-counter": 3
          }, "Option B")]
        }, function () {
          expect(component.debug()).toMatchSnapshot();
        });
      });
      it('should re-render at all times when children exists', function () {
        expect.assertions(2); // make sure the assertion in the `setProps` callback is executed

        var component = (0, _enzyme.mount)(_react.default.createElement(_context_menu_panel.EuiContextMenuPanel, null, "Hello World"));
        expect(component.debug()).toMatchSnapshot();
        component.setProps({
          children: 'More Salutations'
        }, function () {
          expect(component.debug()).toMatchSnapshot();
        });
      });
    });
  });
});