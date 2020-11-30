import React from 'react';
import CheckBox from "../CheckBox";
import PropTypes from "prop-types";
import CheckMarkIcon from "../../assets/images/icons/check-icon.svg";

const ListBlock = ({ listData, sideName, handleToggle, selectedNumber, setAllList }) => {
   
    return (
        <div className="w-56 h-64 rounded bg-white overflow-y-auto py-3 shadow">
            <div className="flex flex-row px-4 border-b border-gray-400 pb-2 items-center">
                <div
                    className={`w-5 h-5 rounded-sm m-2 cursor-pointer flex items-center justify-center
                    ${selectedNumber !== listData.length ? "border-gray-600 border-2" : ""} 
                    ${selectedNumber === listData.length && listData.length > 0 ? "bg-red-600" : "border-2 border-gray-600"}
                    ${selectedNumber > 0 && selectedNumber < listData.length ? "bg-gray-600" : ""}`}
                    onClick={() => setAllList(sideName, selectedNumber === listData.length ? "unSelect" : "select")}
                    >
                    {selectedNumber === listData.length && <img src={CheckMarkIcon} />}
                    {selectedNumber > 0 && selectedNumber < listData.length && 
                    <div className="w-3 h-1 bg-white"></div>}
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-gray-800 leading-3 pl-2">{sideName === "right" ? "Chosen" : "Choices"}</p>
                    <p className="text-gray-500 leading-2 pl-2">{selectedNumber}/{listData.length} selected</p>
                </div>
            </div>
            <ul>
                {listData && listData.map((item, i) =>
                    <li
                        className="flex flex-row items-center py-2 px-4 w-full hover:bg-gray-100 cursor-pointer"
                        key={i}
                        onClick={() => handleToggle(sideName, i)}
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
    selectedNumber: PropTypes.number,
    setAllList: PropTypes.func,
};

export default ListBlock;
