import React from "react";
import PropTypes from "prop-types";
import AddIcon from "../../assets/images/icons/plus-icon.svg";
import EditIcon from "../../assets/images/icons/edit-icon.svg";
import ExtendIcon from "../../assets/images/icons/extend-icon.svg";

const getIcon = (iconType) => {
    switch(iconType) {
        case "add":
            return AddIcon;
        case "edit":
            return EditIcon;
        case "extended":
            return ExtendIcon;
        default:
            return AddIcon;
    }
}

const getBgColor = (colorType) => {
    switch(colorType) {
        case "primary":
            return "bg-blue-600";
        case "secondary":
            return "bg-red-600";
        case "default":
            return "bg-gray-400";
        default:
            return "bg-gray-400";
    }
}

const getButtonSize = (sizeProps) => {
    switch(sizeProps) {
        case "small":
            return 2;
        case "medium":
            return 3;
        case "large":
            return 4;
        default:
            return 3;
    }
}

const FloatingActionButton = ({ type, color, label, size }) => {
    const iconTypes = getIcon(type);
    const bgColor = getBgColor(color);
    const buttonSize = getButtonSize(size);
    return (
        <div className={`rounded-full p-${buttonSize} ${bgColor} m-2 flex flex-row items-center shadow-lg cursor-pointer`}>
            <img className="w-6 h-6" src={iconTypes} alt="action-icon" />
            {label && <p className="px-4 text-white text-lg font-normal tracking-wider">{label}</p>}
        </div>
    )
}

FloatingActionButton.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
};

FloatingActionButton.defaultProps = {
    type: "",
    color: "default",
    label: "",
    size: "medium"
}

export default FloatingActionButton;
