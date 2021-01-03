import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });
/**
 * Factory functionto create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWraper}
 */

const setup = () => shallow(<App/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders a button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();

  expect(count).toBe('0');
});

test('clicking on the increment button increments counter display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')

  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('1')
});

test('clicking on the decrement button decrements counter display', () => {
  const wrapper = setup();
  const incrementBtn = findByTestAttr(wrapper, 'increment-button')
  incrementBtn.simulate('click')
  const decrementBtn = findByTestAttr(wrapper, 'decrement-button')
  decrementBtn.simulate('click')

  const count = findByTestAttr(wrapper, 'count').text()

  expect(count).toBe('0')
})

test('should not decrement below 0 and display error if user trys to decrement below 0', () => {
  const wrapper = setup();

  findByTestAttr(wrapper, 'decrement-button').simulate('click')
  const count = findByTestAttr(wrapper, 'count').text()

  expect(count).toBe('0')

  const errorMsg = findByTestAttr(wrapper, 'error-msg').text()

  expect(errorMsg.length).not.toBe(0)
})

