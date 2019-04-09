import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from '../test/testUtils';
import Congrats from "./Congrats";

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param  {object} props - Component props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test("renders non-empty congrats message if success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});