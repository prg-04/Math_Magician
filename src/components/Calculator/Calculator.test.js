import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './Calculator';
import Buttons from './Buttons';

configure({ adapter: new Adapter() });
jest.mock('../logic/Calculate', () => jest.fn());
// ...
describe('Calculator', () => {
  const buttons = [
    '0',
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  it('renders the Calculator component correctly', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find('.calc')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toBe("Let's do some math...");
    expect(wrapper.find(Buttons)).toHaveLength(1);
    // Use the `buttons` variable in your test assertions or logic
    expect(buttons.length).toBe(20);
  });
});
