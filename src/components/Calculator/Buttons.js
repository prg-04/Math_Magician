import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ buttons }) {
  return (
    <>
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
    </>
  );
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Buttons;
