import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ buttons, handleClick, num1 }) {
  return (
    <>
      {buttons.map((button, idx) => {
        if (idx === 0) {
          return (
            <div
              key={`display-${idx + 1}`}
              style={{ gridColumn: '1/5' }}
              className="display"
            >
              {num1}
            </div>
          );
        }
        if (idx === 4 || idx === 8 || idx === 12 || idx === 16 || idx === 19) {
          return (
            <button
              onClick={() => handleClick(button)}
              key={`button-${idx + 1}`}
              className="button orange"
              type="button"
            >
              {button}
            </button>
          );
        }
        if (idx === 17) {
          return (
            <button
              onClick={() => handleClick(button)}
              key={`button-${idx + 1}`}
              className="button d-spc"
              type="button"
            >
              {button}
            </button>
          );
        }

        return (
          <button
            onClick={() => handleClick(button)}
            key={`button-${idx + 1}`}
            className="button"
            type="button"
          >
            {button}
          </button>
        );
      })}
    </>
  );
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  num1: PropTypes.number.isRequired,
};

export default Buttons;
