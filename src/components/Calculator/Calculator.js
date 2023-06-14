import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/Calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorData((prevData) => calculate(prevData, buttonName));
  };

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

  return (
    <div className="calc">
      <h2 style={{ margin: '2.5rem 1rem' }}>Let&apos;s do some math...</h2>

      <div className="gridCont">
        <Buttons
          buttons={buttons}
          handleClick={handleClick}
          num1={
            calculatorData.next !== null
              ? calculatorData.next
              : calculatorData.total
          }
        />
      </div>
    </div>
  );
}

export default Calculator;
