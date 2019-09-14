function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps, findTestSubject, takeMountedSnapshot } from '../../test';
import { EuiToolTip } from './tool_tip';
describe('EuiToolTip', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiToolTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, requiredProps), React.createElement("button", null, "Trigger")));
    expect(component).toMatchSnapshot();
  });
  test('shows tooltip on focus', function () {
    var component = mount(React.createElement(EuiToolTip, _extends({
      title: "title",
      id: "id",
      content: "content"
    }, requiredProps), React.createElement("button", {
      "data-test-subj": "trigger"
    }, "Trigger")));
    var trigger = findTestSubject(component, 'trigger');
    trigger.simulate('focus');
    expect(takeMountedSnapshot(component)).toMatchSnapshot();
  });
});