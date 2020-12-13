import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const getColorClass = (color) => {
  if (color === 'secondary') {
    return 'pink';
  } else if (color === 'primary') {
    return 'indigo';
  } else {
    return 'gray';
  }
};

export const LinearProgressBar = ({ defaultValue, color, withLabel }) => {
  const [width, setWidth] = useState(0);
  const colorClass = getColorClass(color);

  useEffect(() => {
    setWidth(defaultValue);
  }, []);

  return (
    <div className="flex items-center px-1 w-full">
      <div className={`flex-1 h-1.5 bg-${colorClass}-300 my-2`}>
        <div className={`h-full bg-${colorClass}-700`}
             style={{
               transition: `all 0.4s ease`,
               width: `${width}%`
             }}
        >
        </div>
      </div>
      {withLabel && <span className="pl-2 text-gray-500">{defaultValue}%</span>}
    </div>
  )
}

LinearProgressBar.propTypes = {
  defaultValue: PropTypes.number,
  color: PropTypes.string,
  withLabel: PropTypes.bool
};

LinearProgressBar.defaultProps = {
  defaultValue: 0,
  color: 'default',
  withLabel: false
};

export default LinearProgressBar;
