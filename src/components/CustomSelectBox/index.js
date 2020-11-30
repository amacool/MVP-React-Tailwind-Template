import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { SelectOption } from "./SelectOption";

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
    return `bg-white relative w-full h-10 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-${colorClass}-500 focus:border-${colorClass}-500 sm:text-sm`;
  } else {
    return `bg-white relative w-full h-10 border-b-2 border-transparent shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none border-solid border-transparent focus:border-${colorClass}-500 sm:text-sm`;
  }
};

const CustomSelectBox = ({ label, defaultValue, options, variant, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const colorClass = getColorClass(color);
  const variantClass = getVariantClass(colorClass, variant);
  const toggleContainer = React.createRef();

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);

    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    }
  });

  const onClickOutsideHandler = event => {
    if (isOpen && toggleContainer.current && !toggleContainer.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  const handleSwitchDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSetValue = (v) => {
    setValue(v);
    setIsOpen(false);
  }

  return (
    <div className="w-full mx-1">
      <label id="listbox-label" className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 w-full relative">
        <button onClick={handleSwitchDropdown} type="button" aria-haspopup="listbox" aria-expanded="true"
                aria-labelledby="listbox-label"
                style={{minWidth: '150px'}}
                className={variantClass}>
          <span className="block truncate w-100">
            {value}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                 fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"/>
            </svg>
          </span>
        </button>

        <div style={{display: isOpen ? 'block' : 'none'}} ref={toggleContainer}
             className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3"
              className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options && options.map((option, i) => (
              <SelectOption key={`option-${i}`} label={option} value={option} selectedValue={value}
                            onSetValue={handleSetValue} colorClass={colorClass}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

CustomSelectBox.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  options: PropTypes.array,
  color: PropTypes.number,
  variant: PropTypes.number,
};

CustomSelectBox.defaultProps = {
  defaultValue: '',
  options: [],
  color: 'default',
  variant: '',
};

export default CustomSelectBox;
