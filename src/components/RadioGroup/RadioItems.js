import React from "react";
import PropTypes from "prop-types";

const getSize = (sizeType) => {
    switch (sizeType) {
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

const getColor = (colorType) => {
    switch (colorType) {
        case "default":
            return "gray-600";
        case "secondary":
            return "red-600";
        default:
            return "gray-600";
    }
}

const RadioItem = ({ size, color, data, itemID, setGroupData }) => {
    const radioSize = getSize(size);
    const radioColor = getColor(color);
    return (
        <div 
        onClick={data.status === "enable" ? ()=>setGroupData(itemID) : null}
        className="flex flex-row items-center cursor-pointer my-2">
            <div className={`w-${radioSize} h-${radioSize} flex justify-center items-center border-2 border-${data.selected ? radioColor : data.status === "enable" ? "gray-600" : "gray-300"} rounded-full`}>
                {data.selected && <div className={`w-${radioSize - 2} h-${radioSize - 2} rounded-full bg-${radioColor}`}></div>}
            </div>
            <p className={`ml-2 text-xl text-${data.status === "enable" ? "gray-900" : "gray-500"}`}>{data.name}</p>
        </div>

    )
}

RadioItem.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.object,
    itemID: PropTypes.number,
    setGroupData: PropTypes.func,
};

RadioItem.defaultProps = {
    size: "medium",
    color: "default",
};

export default RadioItem;
