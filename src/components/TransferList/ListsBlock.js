import React from 'react';
import CheckBox from "../CheckBox";
import PropTypes from "prop-types";

const ListBlock = ({ listData, sideName, handleToggle }) => {
    return (
        <div className="w-48 h-64 rounded bg-white overflow-y-auto py-4 shadow">
                <ul>
                    {listData && listData.map((item, i) =>
                        <li
                            className="flex flex-row items-center py-2 px-4 w-full hover:bg-gray-100 cursor-pointer" 
                            key={i}
                            onClick={()=>handleToggle(sideName, i)}
                        >
                            <CheckBox theme="secondary" checked={item.selected} />
                            <p className="ml-4">{item.name}</p>
                        </li>
                    )}
                </ul>
            </div>
    )
}

ListBlock.propTypes = {
    listData: PropTypes.array,
    sideName: PropTypes.string,
    handleToggle: PropTypes.func,
};

export default ListBlock;
