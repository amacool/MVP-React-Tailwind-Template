import React from 'react';
import PropTypes from 'prop-types';

const getSizeClass = (size) => {
  if (size === 'small') {
    return 'text-xs px-2.5 py-1.5';
  } else if (size === 'medium') {
    return 'text-sm px-3 py-2';
  } else {
    return 'text-base px-4 py-2';
  }
};

const getColorClass = (color) => {
  if (color === 'secondary') {
    return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200';
  } else if (color === 'primary') {
    return 'text-white bg-indigo-600 hover:bg-indigo-700';
  } else {
    return 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300';
  }
};

const CustomButton = ({ label, size, color }) => {
  const sizeClass = getSizeClass(size);
  const colorClass = getColorClass(color);

  return (
    <button
      type="button"
      className={`inline-flex items-center ${sizeClass} ${colorClass} border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

CustomButton.defaultProps = {
  label: '',
  size: 'small',
  color: 'default',
};

export default CustomButton;
