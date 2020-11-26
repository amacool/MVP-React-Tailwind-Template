import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getTwoDigits = (val) => val < 10 ? `0${val}` : val;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const yearRange = 12;

const CustomDatePicker = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const [showedYear, setShowedYear] = useState(new Date().getFullYear());
  const [selectMode, setSelectMode] = useState("day");
  const [rangeStartYear, setRangeStartYear] = useState(new Date().getFullYear() - 10);

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
      setSelectMode("day");
      setCurrentYear(year || new Date().getFullYear());
      setCurrentMonth(month || new Date().getMonth());
    }
  }

  const handleSwitchDropdown = () => {
    if (isOpen) {
      setCurrentYear(year || new Date().getFullYear());
      setCurrentMonth(month || new Date().getMonth());
    }
    setIsOpen(!isOpen);
  };

  const isLeapYear = y => {
    return ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);
  };

  const getDaysInMonth = (y, m) => {
    return [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
  };

  const getStartWeekDay = (y, m) => {
    return new Date(y, m).getDay();
  };

  const handlePrev = () => {
    if (selectMode === "day") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
        setShowedYear(currentYear);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else if (selectMode === "month") {
      setCurrentYear(currentYear - 1);
    } else if (selectMode === "year") {
      setRangeStartYear(rangeStartYear - yearRange);
    }
  };

  const handleNext = () => {
    if (selectMode === "day") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
        setShowedYear(currentYear);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (selectMode === "month") {
      setCurrentYear(currentYear + 1);
    } else if (selectMode === "year") {
      setRangeStartYear(rangeStartYear + yearRange);
    }
  };

  const setDate = (y, m, d) => {
    setYear(y);
    setMonth(m);
    setDay(d);
    handleSwitchDropdown();
  };

  const changeCurrentMonth = m => {
    setCurrentMonth(m);
    setShowedYear(currentYear);
    setSelectMode("day");
  };

  const changeCurrentYear = y => {
    setCurrentYear(y);
    setSelectMode("month");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <label className="block text-sm mb-1 text-gray-500">{label}</label>
      <div ref={toggleContainer} className="relative inline-block text-left w-56">
        <div
          onClick={handleSwitchDropdown}
          className="inline-flex justify-between w-full border-b-1 border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-haspopup="true" aria-expanded="true"
        >
          <div className="value-container flex items-center justify-around">
            {day && (
              <span className="w-4">{getTwoDigits(month + 1)}/{getTwoDigits(day)}/{year}</span>
            )}
          </div>
          <button style={{outline: 0}}>
            <svg
              className="-mr-1 ml-2 h-5 w-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
            </svg>
          </button>
        </div>
        <transition
          enter-active-class="transition ease-out duration-200"
          leave-active-class="transition ease-in duration-150"
          enter-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <div
            style={{display: isOpen ? "block" : "none"}}
            className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 px-4 z-10"
          >
            <div className="py-1">
              <div className="flex justify-between py-4">
                <button onClick={handlePrev} style={{outline: 0}}>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g
                      id="Stockholm-icons-/-Navigation-/-Angle-left"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <polygon points="0 0 24 0 24 24 0 24"></polygon>
                      <path
                        d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                        id="Path-94" fill="#000000" fillRule="nonzero"
                        transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999) ">
                      </path>
                    </g>
                  </svg>
                </button>

                <p className="text-lg">
                  {selectMode === "day" && <span className="cursor-pointer" onClick={() => setSelectMode("month")}>{monthNames[currentMonth]} {currentYear}</span>}
                  {selectMode === "month" && <span className="cursor-pointer" onClick={() => setSelectMode("year")}>{currentYear}</span>}
                  {selectMode === "year" && <span className="cursor-pointer" onClick={() => setSelectMode("day")}>{rangeStartYear} - {rangeStartYear + yearRange - 1}</span>}
                </p>

                <button onClick={handleNext} style={{ outline: 0 }}>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="Stockholm-icons-/-Navigation-/-Angle-right" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon points="0 0 24 0 24 24 0 24"></polygon>
                      <path
                        d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                        id="Path-94" fill="#000000" fillRule="nonzero"
                        transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) ">
                      </path>
                    </g>
                  </svg>
                </button>
              </div>
              {selectMode === "day" && (
                <div className="grid grid-cols-7">
                  {weekDays.map((weekDay, i) => (
                    <div key={`weekday-${i}`} className="col-span-1 text-center cursor-pointer text-gray-500 pb-3">{weekDay}</div>
                  ))}
                  {getStartWeekDay(currentYear, currentMonth) > 0 && (
                    <div className={`col-span-${getStartWeekDay(currentYear, currentMonth)}`}></div>
                  )}
                  {[...new Array(getDaysInMonth(currentYear, currentMonth))].map((_, i) => (
                    <div
                      key={`day-${i}`}
                      onClick={() => setDate(currentYear, currentMonth, i + 1)}
                      className="col-span-1 text-center py-0.5"
                    >
                      <button
                        className={`rounded-full ${(day === (i + 1) && month === currentMonth && year === currentYear) ? "bg-indigo-600 text-white" : "hover:bg-gray-200"}`}
                        style={{width: 30, height: 30, outline: 0}}
                      >
                        {i + 1}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectMode === "month" && (
                <div className="grid grid-cols-3">
                  {monthNames.map((monthName, i) => (
                    <div key={`month-${i}`} className="col-span-1 text-center font-medium px-2 py-4">
                      <button
                        onClick={() => changeCurrentMonth(i)}
                        className={`rounded-full ${(currentYear === year && i === month) ? "bg-indigo-600 text-white" : (showedYear === currentYear && i === currentMonth) ? "bg-gray-200" : "hover:bg-gray-200"}`}
                        style={{width: 70, height: 30, outline: 0}}
                      >
                        {monthName.substr(0, 3).toUpperCase()}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectMode === "year" && (
                <div className="grid grid-cols-3">
                  {[...new Array(yearRange)].map((_, i) => (
                    <div key={`year-${i}`} className="col-span-1 text-center font-medium px-2 py-4">
                      <button
                        onClick={() => changeCurrentYear(i + rangeStartYear)}
                        className={`rounded-full ${((i + rangeStartYear) === year) ? "bg-indigo-600 text-white" : ((i + rangeStartYear) === showedYear) ? "bg-gray-200" : "hover:bg-gray-200"}`}
                        style={{width: 70, height: 30, outline: 0}}
                      >
                        {i + rangeStartYear}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </transition>
      </div>
    </div>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string,
};

export default CustomDatePicker;
