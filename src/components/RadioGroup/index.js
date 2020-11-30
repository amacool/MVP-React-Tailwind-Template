import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioItem from "./RadioItems";

const RadioGroup = ({ radioGroupData, size, color }) => {
    const [groupData, setGroupData] = useState(radioGroupData.data);

    const setData = (id) => {
        let virtualData = [];
        groupData.map(dataItem => {
            virtualData.push({...dataItem, selected: false});
        });
        virtualData[id] = {...virtualData[id], selected: true};
        setGroupData(virtualData);
    }
    return (
        <div className="flex flex-col items-start">
            <p className="text-xl text-gray-600">{radioGroupData.groupName}</p>
            {groupData.map((item, i) =>
                <RadioItem
                    key={i}
                    size={size}
                    color={color}
                    data={item}
                    setGroupData={setData}
                    itemID={i}
                />
            )}
        </div>
    )
}

RadioGroup.propTypes = {
    radioGroupData: PropTypes.object.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
};

export default RadioGroup;
