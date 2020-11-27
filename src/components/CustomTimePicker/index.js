import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectItem } from './SelectItem';

const getTwoDigits = (val) => val < 10 ? `0${val}` : val;

const CustomTimePicker = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [dayLabel, setDayLabel] = useState('AM');

  const handleSwitchDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <label className="block text-sm mb-1 text-gray-500">{label}</label>
      <div className="relative inline-block text-left w-56">
        <div className="inline-flex justify-between w-full border-b-1 border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
          <div className="value-container flex items-center justify-around">
            <span className="w-4">{getTwoDigits(hour)}</span>
            <span>:</span>
            <span className="w-4 minutes mr-1">{getTwoDigits(minute)}</span>
            <span className="day-label">{dayLabel}</span>
          </div>
          <svg onClick={handleSwitchDropdown} className="-mr-1 ml-2 h-5 w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <transition
          enter-active-class="transition ease-out duration-200"
          leave-active-class="transition ease-in duration-150"
          enter-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <div style={{ display: isOpen ? 'block' : 'none' }} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="grid grid-cols-3">
                <div className="h-60 col-span-1 overflow-y-auto item-wrapper" style={{ height: 200 }}>
                  {[...new Array(12)].map((_, key) => (
                    <SelectItem key={`h-${key}`} text={key} isActive={hour === key} onSetValue={setHour} />
                  ))}
                </div>
                <div className="h-60 col-span-1 overflow-y-auto item-wrapper" style={{ height: 200 }}>
                  {[...new Array(60)].map((_, key) => (
                    <SelectItem key={`m-${key}`} text={key} isActive={minute === key} onSetValue={setMinute} />
                  ))}
                </div>
                <div className="h-60 col-span-1 overflow-y-auto item-wrapper" style={{ height: 200 }}>
                  <SelectItem text="AM" isActive={dayLabel === 'AM'} onSetValue={setDayLabel} />
                  <SelectItem text="PM" isActive={dayLabel === 'PM'} onSetValue={setDayLabel} />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  );
};

CustomTimePicker.propTypes = {
  label: PropTypes.string,
};

export default CustomTimePicker;
