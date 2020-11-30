import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CheckMarkIcon from "../../assets/images/icons/check-icon.svg";

const getBgColorTheme = (theme, status) => {
    if (status === "enabled") {
        switch (theme) {
            case "primary":
                return "bg-blue-600";
            case "secondary":
                return "bg-red-600";
            case "default":
                return "bg-gray-700";
            default:
                return "bg-red-600";
        }
    }
    else return "bg-gray-500";
}

const getSize = (size) => {
    switch(size) {
        case "small":
            return 4;
        case "medium":
            return 5;
        case "large":
            return 6;
        default:
            return 5;
    }
}

const CheckBox = ({ theme, checked, status, size }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const bgColor = getBgColorTheme(theme, status);
    const boxSize = getSize(size);
    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);
    return (
        <div
            className={`w-${boxSize} h-${boxSize} rounded-sm ${isChecked ? bgColor : "border-2 border-gray-600"} m-2 cursor-pointer`}
            onClick={status === "enabled" ? () => setIsChecked(!isChecked) : null}>
            {isChecked && <img src={CheckMarkIcon} />}
        </div>
    )
}

CheckBox.propTypes = {
    theme: PropTypes.string,
    checked: PropTypes.bool,
    status: PropTypes.string,
    size: PropTypes.string,
};

CheckBox.defaultProps = {
    theme: "default",
    checked: false,
    status: "enabled",
    size: "medium"
};

export default CheckBox;
