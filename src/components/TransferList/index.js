import React, { useState } from 'react';
import PropTypes from "prop-types";
import ListBlock from "./listBlock";

const TransferList = ({ transferListData }) => {
    const [rightBlock, setRightBlock] = useState(transferListData.rightBlock);
    const [leftBlock, setLeftBlock] = useState(transferListData.leftBlock);

    const leftChecked = leftBlock.filter(item => item.selected === true);
    const leftUnChecked = leftBlock.filter(item => item.selected === false);
    const rightChecked = rightBlock.filter(item => item.selected === true);
    const rightUnChecked = rightBlock.filter(item => item.selected === false);

    const handleToggle = (side, index) => {
        const newBlockList = side === "left" ? [...leftBlock] : [...rightBlock];
        newBlockList[index] = {...newBlockList[index], selected: !newBlockList[index].selected};
        side === "left" ? setLeftBlock(newBlockList) : setRightBlock(newBlockList);
    }

    const handleAllTransfer = (direction) => {
        let newCopyBlockList = [];
        if(direction === "right") {
            leftBlock.map(element => {
                newCopyBlockList.push({...element, selected: false});
            });
        }
        else {
            rightBlock.map(element => {
                newCopyBlockList.push({...element, selected: false});
            });
        }
        direction === "right" ? setLeftBlock([]) : setRightBlock([]);
        direction === "right" ? setRightBlock(rightBlock.concat(newCopyBlockList)) : setLeftBlock(leftBlock.concat(newCopyBlockList));
    }

    const handleSelectedTransfer = (direction) => {
        direction === "right" ? setLeftBlock(leftUnChecked) : setRightBlock(rightUnChecked);
        let newMergeList = [];
        if(direction === "right") {
            leftChecked.map(item => {
                newMergeList.push({...item, selected: false});
            });
        }
        else {
            rightChecked.map(item => {
                newMergeList.push({...item, selected: false});
            });
        }
        direction === "right" ? setRightBlock(rightBlock.concat(newMergeList)) : setLeftBlock(leftBlock.concat(newMergeList));
    }

    return (
        <div className="flex flex-row items-center">
            <ListBlock listData={leftBlock} sideName={"left"} handleToggle={handleToggle} />
            <div className="flex flex-col mx-2">
                <button 
                className="py-1 px-6 border border-gray-400 rounded my-2"
                onClick={()=>handleAllTransfer("right")}
                >≫</button>
                <button 
                className={`py-1 px-6 border border-gray-${leftChecked.length === 0 ? "300" : "500"} rounded my-2`} 
                onClick={()=>handleSelectedTransfer("right")}
                >
                    &gt;
                </button>
                <button 
                className={`py-1 px-6 border border-gray-${rightChecked.length === 0 ? "300" : "500"} rounded my-2`} 
                onClick={()=>handleSelectedTransfer("left")}
                >&lt;</button>
                <button 
                className="py-1 px-6 border border-gray-400 rounded my-2"
                onClick={()=>handleAllTransfer("left")}
                >≪</button>
            </div>
            <ListBlock listData={rightBlock} sideName={"right"} handleToggle={handleToggle} />
        </div>
    )
}

TransferList.propTypes = {
    transferListData: PropTypes.object,
};

export default TransferList;
