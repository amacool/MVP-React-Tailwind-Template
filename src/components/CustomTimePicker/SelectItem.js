import React  from 'react';
import PropTypes from 'prop-types';
import { getTwoDigits } from '../../helper';

export const SelectItem = ({ text, isActive, onSetValue }) => (
  <div
    onClick={() => onSetValue(text)}
    className={`text-center cursor-pointer p-1 hover:bg-blue-100 ${isActive ? 'bg-blue-500 text-white hover:bg-blue-500' : ''}`}
  >
    {getTwoDigits(text)}
  </div>
);

SelectItem.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onSetValue: PropTypes.func,
};
