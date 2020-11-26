import React, { useState } from "react";
import PropTypes from 'prop-types';
import CheckMarkIcon from "../../assets/images/icons/check-icon.svg";

const getBgColorTheme = (theme) => {
    switch (theme) {
        case "primary":
            return "bg-blue-600";
        default:
            return "bg-red-600";
    }
}

const CheckBox = ({ theme, checked }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const bgColor = getBgColorTheme(theme);
    return (
        <div
            className={`w-4 h-4 rounded-sm ${isChecked ? bgColor : "border border-2 border-gray-400"} m-2`}
            onClick={() => setIsChecked(!isChecked)}>
            {isChecked && <img src={CheckMarkIcon} />}
        </div>
    )
}

CheckBox.propTypes = {
    theme: PropTypes.string,
    checked: PropTypes.bool,
};

CheckBox.defaultProps = {
    theme: "default",
    checked: false,
};

export default CheckBox;
