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

const getVariantClass = (variant) => {
  if (variant === 'outlined') {
    return 'text-gray-700 bg-white hover:bg-gray-50 border-indigo-700';
  } else if (variant === 'contained') {
    return 'text-white bg-indigo-500 hover:bg-indigo-700 border-indigo-500';
  } else {
    return 'text-gray-700 bg-white hover:bg-gray-50';
  }
};

const CustomButtonGroup = ({ label, size, variant }) => {
  const sizeClass = getSizeClass(size);
  const themeClass = getVariantClass(variant);

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button type="button" className={`relative inline-flex items-center ${sizeClass} ${themeClass} rounded-l-md border focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${variant === 'text' ? 'border-none' : ''}`}>
        {label[0]}
      </button>
      <button type="button" className={`-ml-px relative inline-flex items-center ${sizeClass} ${themeClass} border focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${variant === 'text' ? 'border-l border-indigo-300 border-t-0 border-b-0 border-r-0' : ''}`}>
        {label[1]}
      </button>
      <button type="button" className={`-ml-px relative inline-flex items-center ${sizeClass} ${themeClass} rounded-r-md border focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${variant === 'text' ? 'border-l border-indigo-300 border-t-0 border-b-0 border-r-0' : ''}`}>
        {label[2]}
      </button>
    </span>
  );
};

CustomButtonGroup.propTypes = {
  label: PropTypes.array,
  size: PropTypes.string,
  variant: PropTypes.string,
};

CustomButtonGroup.defaultProps = {
  label: '',
  size: 'small',
  variant: 'text',
};

export default CustomButtonGroup;
