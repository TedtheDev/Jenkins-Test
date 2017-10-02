import React from 'react';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../src/components/main.js';

configure({ adapter: new Adapter() });

test('Main renders hi', () => {
    const main = shallow(<Main />);

    expect(main.find('div').text()).toEqual("Hi from app");

});