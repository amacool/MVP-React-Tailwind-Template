import React from 'react';
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
  const colorClass = getColorClass(color);
  const variantClass = getVariantClass(colorClass, variant);

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <div className="mt-1">
        <input
          type="text"
          id="email"
          className={variantClass}
          placeholder="you@example.com"
          value={defaultValue}
        />
      </div>
    </div>
  );
};

CustomTextField.propTypes = {
  defaultValue: PropTypes.number,
  color: PropTypes.number,
  variant: PropTypes.number,
};

CustomTextField.defaultProps = {
  defaultValue: 0,
  color: 'default',
  variant: '',
};

export default CustomTextField;
