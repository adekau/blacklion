import React from 'react';
import { render } from 'enzyme';
import { EuiListGroupItem, SIZES } from './list_group_item';
describe('EuiListGroupItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiListGroupItem, {
      label: "Label"
    }));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('size', function () {
      SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = render(React.createElement(EuiListGroupItem, {
            label: "Label",
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('isActive', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          isActive: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isDisabled', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          iconType: "empty"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('icon', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          icon: React.createElement("span", null)
        }));
        expect(component).toMatchSnapshot();
      });
    }); // TODO: This keeps re-rendering differently because of fake id creation
    // describe('showToolTip', () => {
    //   test('is rendered', () => {
    //     const component = render(
    //       <EuiListGroupItem label="Label" showToolTip />
    //     );
    //     expect(component).toMatchSnapshot();
    //   });
    // });

    describe('wrapText', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          wrapText: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('extraAction', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          extraAction: {
            iconType: 'empty',
            alwaysShow: true,
            'aria-label': 'label'
          }
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('href', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          href: "#"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "Label",
          onClick: function onClick() {}
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('href and onClick', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiListGroupItem, {
          label: "",
          onClick: function onClick() {},
          href: "#"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  test('renders a disabled button even if provided an href', function () {
    var component = render(React.createElement(EuiListGroupItem, {
      label: "Label",
      isDisabled: true,
      href: "#"
    }));
    expect(component).toMatchSnapshot();
  });
  test('renders a disabled button even if provided an href', function () {
    var component = render(React.createElement(EuiListGroupItem, {
      label: "Label",
      isDisabled: true,
      href: "#"
    }));
    expect(component).toMatchSnapshot();
  });
  describe('throws an warning', function () {
    var oldConsoleError = console.warn;
    var consoleStub;
    beforeEach(function () {
      // We don't use jest.spyOn() here, because EUI's tests apply a global
      // console.error() override that throws an exception. For these
      // tests, we just want to know if console.error() was called.
      console.warn = consoleStub = jest.fn();
    });
    afterEach(function () {
      console.warn = oldConsoleError;
    });
    test('if both iconType and icon are provided but still renders', function () {
      var component = render(React.createElement(EuiListGroupItem, {
        label: "",
        iconType: "empty",
        icon: React.createElement("span", null)
      }));
      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch('`iconType` and `icon` were passed');
      expect(component).toMatchSnapshot();
    });
  });
});