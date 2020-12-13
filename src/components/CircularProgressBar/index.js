import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const getColor = (color) => {
  if (color === 'primary') {
    return '#4338ca';
  } else if (color === 'secondary') {
    return '#be185d';
  } else {
    return '#374151';
  }
};

const CircularProgressBar = ({ defaultValue, radius, lineWidth, color, withLabel }) => {
  const [value, setValue] = useState(0);
  const canvas = useRef(null);

  useEffect(() => {
    if (value < defaultValue) {
      setTimeout(() => {
        setValue(value + defaultValue / 30)
        let ctx = canvas.current.getContext("2d");
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        drawCircle(ctx);
        withLabel && drawText(ctx);
      });
    } else {
      setValue(defaultValue);
      let ctx = canvas.current.getContext("2d");
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      drawCircle(ctx);
      withLabel && drawText(ctx);
    }
  }, [value]);

  const drawCircle = (ctx) => {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = getColor(color);
    ctx.beginPath();
    ctx.arc(radius, radius, radius - lineWidth, -0.5 * Math.PI, Math.PI * (2 * value / 100 - 0.5));
    ctx.stroke();
  };

  const drawText = (ctx) => {
    ctx.fillStyle = "#6b7280";
    ctx.font = `15px 'Segoe UI'`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${value.toFixed(0)}%`, canvas.current.width/2, canvas.current.height/2);
  };

  return (
    <div className="text-indigo-700 stroke-current">
      <canvas ref={canvas} width={2 * radius} height={2 * radius}/>
    </div>
  );
};


CircularProgressBar.propTypes = {
  radius: PropTypes.number,
  defaultValue: PropTypes.number,
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  withLabel: PropTypes.bool
};

CircularProgressBar.defaultProps = {
  radius: 30,
  defaultValue: 0,
  lineWidth: 5,
  color: 'default',
  withLabel: false
};

export default CircularProgressBar;
