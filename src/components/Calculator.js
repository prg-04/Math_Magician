import React from 'react';

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
      {buttons.map((button, idx) => {
        if (idx === 0) {
          return (
            <div key={button} style={{ gridColumn: '1/5' }} className="display">
              {button}
            </div>
          );
        }
        if (idx === 4 || idx === 8 || idx === 12 || idx === 16 || idx === 19) {
          return (
            <button key={button} className="button orange" type="button">
              {button}
            </button>
          );
        }
        if (idx === 17) {
          return (
            <button key={button} className="button d-spc" type="button">
              {button}
            </button>
          );
        }

        return (
          <button key={button} className="button" type="button">
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default Calculator;
