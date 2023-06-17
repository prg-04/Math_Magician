import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // Updated adapter version
import Buttons from './Buttons';

configure({ adapter: new Adapter() });
// Rest of your test code...
describe('Buttons', () => {
  const buttons = ['1', '2', '3']; // Define the buttons variable
  const handleClick = jest.fn();
  const num1 = '123';
  it('renders a display div for num1', () => {
    const wrapper = shallow(
      <Buttons buttons={buttons} handleClick={handleClick} num1={num1} />,
    );
    const displayDiv = wrapper.find('.display');
    expect(displayDiv).toHaveLength(1);
    expect(displayDiv.text()).toBe(num1);
  });
});
