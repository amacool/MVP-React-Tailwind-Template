import React, { useState } from 'react';
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

const getVariantClass = (colorClass, variant) => {
  if (variant === 'outlined') {
    return `py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-${colorClass}-500 focus:border-${colorClass}-500 block w-full sm:text-sm rounded-md`;
  } else {
    return `py-2 px-3 shadow-sm border-solid border-b-2 focus:outline-none focus:border-b-2 focus:border-${colorClass}-500 block w-full sm:text-sm`;
  }
};

const CustomTextField = ({ defaultValue, color, variant }) => {
  const [value, setValue] = useState(defaultValue);
  const colorClass = getColorClass(color);
  const variantClass = getVariantClass(colorClass, variant);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <div className="mt-1">
        <input
          type="text"
          className={variantClass}
          placeholder="you@example.com"
          value={value}
          onChange={() => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};

CustomTextField.propTypes = {
  defaultValue: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
};

CustomTextField.defaultProps = {
  defaultValue: '',
  color: 'default',
  variant: '',
};

export default CustomTextField;
