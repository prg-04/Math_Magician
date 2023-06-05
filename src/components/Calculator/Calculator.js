import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  const buttons = [
    '0',
    'AC',
    '+/-',
    '%',
    ' ÷',
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

  return (
    <div className="gridCont">
      <Buttons buttons={buttons} />
    </div>
  );
}

export default Calculator;
