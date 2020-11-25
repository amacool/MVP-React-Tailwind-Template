import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const CustomSlider = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const [draggable, setDraggable] = useState(false);
  const [hoverOnCircle, setHoverOnCircle] = useState(false);
  const sliderRef = useRef(null);

  const getValue = e => {
    const sliderWidth = sliderRef.current.clientWidth;
    const offsetX = Math.abs(e.clientX - sliderRef.current.offsetLeft);
    return Math.min(offsetX/sliderWidth * 100, 100);
  };

  const handleClickBar = e => {
    setDraggable(true);
    setValue(getValue(e));
  };

  const handleMoveOnBar = e => {
    draggable && setValue(getValue(e));
  };

  return (
    <div className="w-40">
      <span
        ref={sliderRef}
        className="w-full h-0.5 py-3.5 px-0 cursor-pointer inline-block relative box-content text-blue-700"
        onMouseDown={handleClickBar}
        onMouseMove={handleMoveOnBar}
        onMouseUp={() => setDraggable(false)}
      >
        <span className="w-full h-0.5 block opacity-40 absolute rounded bg-current text-blue-700" />
        <span className="h-0.5 block absolute rounded bg-current" style={{ width: `${value}%` }} />
        <input type="hidden" value={value} />
        <span
          className="w-3.5 h-3.5 flex outline-none absolute box-border -mt-1.5 shadow-sm items-center -ml-1.5 rounded-full justify-center bg-current text-blue-700"
          style={{ left: `${value}%`, boxShadow: hoverOnCircle ? '0px 0px 0px 8px rgba(25, 118, 210, 0.16)' : '' }}
          onMouseDown={() => setDraggable(true)}
          onMouseUp={() => setDraggable(false)}
          onMouseEnter={() => setHoverOnCircle(true)}
          onMouseOut={() => setHoverOnCircle(false)}
        />
      </span>
    </div>
  );
};

CustomSlider.propTypes = {
  defaultValue: PropTypes.number,
};

export default CustomSlider;
