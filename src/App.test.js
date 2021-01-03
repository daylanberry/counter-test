import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<App/>)

  const appComponent = wrapper.find("[data-test='component-app']")

  expect(appComponent.length).toBe(1)
});

test('renders a button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking on the button increments counter display', () => {

});
