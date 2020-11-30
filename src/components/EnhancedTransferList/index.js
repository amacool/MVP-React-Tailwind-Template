import React, { useState } from 'react';
import PropTypes from "prop-types";
import ListBlock from "./listBlock";

const EnhancedTransferList = ({ transferListData }) => {
    const [rightBlock, setRightBlock] = useState(transferListData.rightBlock);
    const [leftBlock, setLeftBlock] = useState(transferListData.leftBlock);

    const leftChecked = leftBlock.filter(item => item.selected === true);
    const leftUnChecked = leftBlock.filter(item => item.selected === false);
    const rightChecked = rightBlock.filter(item => item.selected === true);
    const rightUnChecked = rightBlock.filter(item => item.selected === false);

    const handleToggle = (side, index) => {
        const newBlockList = side === "left" ? [...leftBlock] : [...rightBlock];
        newBlockList[index] = { ...newBlockList[index], selected: !newBlockList[index].selected };
        side === "left" ? setLeftBlock(newBlockList) : setRightBlock(newBlockList);
    }

    const handleSelectedTransfer = (direction) => {
        direction === "right" ? setLeftBlock(leftUnChecked) : setRightBlock(rightUnChecked);
        let newMergeList = [];
        if (direction === "right") {
            leftChecked.forEach(item => {
                newMergeList.push({ ...item, selected: false });
            });
        }
        else {
            rightChecked.forEach(item => {
                newMergeList.push({ ...item, selected: false });
            });
        }
        direction === "right" ? setRightBlock(rightBlock.concat(newMergeList)) : setLeftBlock(leftBlock.concat(newMergeList));
    }

    const setAllList = (side, action) => {
        const newSideList = [];
        if(side === "left") {
            leftBlock.forEach(item => {
                newSideList.push({...item, selected: action ==="select" ? true : false});
            });
        }
        else {
            rightBlock.forEach(item => {
                newSideList.push({...item, selected: action ==="select" ? true : false});
            });
        }
        side === "left" ? setLeftBlock(newSideList) : setRightBlock(newSideList);
    }

    return (
        <div className="flex flex-row items-center">
            <ListBlock
                listData={leftBlock}
                sideName={"left"}
                handleToggle={handleToggle}
                selectedNumber={leftChecked.length}
                setAllList={setAllList}
            />
            <div className="flex flex-col mx-2">
                <button
                    className={`py-1 px-6 border border-gray-${leftChecked.length === 0 ? "300" : "500"} rounded my-2`}
                    onClick={() => handleSelectedTransfer("right")}
                >
                    &gt;
                </button>
                <button
                    className={`py-1 px-6 border border-gray-${rightChecked.length === 0 ? "300" : "500"} rounded my-2`}
                    onClick={() => handleSelectedTransfer("left")}
                >&lt;</button>
            </div>
            <ListBlock
                listData={rightBlock}
                sideName={"right"}
                handleToggle={handleToggle}
                selectedNumber={rightChecked.length}
                setAllList={setAllList}
            />
        </div>
    )
}

EnhancedTransferList.propTypes = {
    transferListData: PropTypes.object,
};

export default EnhancedTransferList;
