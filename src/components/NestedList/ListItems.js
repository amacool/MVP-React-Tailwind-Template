import React, { useState } from 'react';
import ArrowUpIcon from '../../assets/images/icons/arrow-up.svg';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';
import PropTypes from 'prop-types';

export const ListItem = ({ itemData }) => {
    const [subList, setSubList] = useState(false);
    return (
        <li className="w-full flex flex-col">
            <div
                onClick={itemData.subList ? () => setSubList(!subList) : null}
                className="flex flex-row items-center justify-between w-full px-4 hover:bg-gray-100 cursor-pointer h-14">
                <div className="flex flex-row items-center">
                    <img src={itemData.icon} className="w-6 h-6" alt="icon" />
                    <p className="pl-8 text-lg font-sans">{itemData.name}</p>
                </div>
                {itemData.subList && <img src={subList ? ArrowUpIcon : ArrowDownIcon} className="w-4 h-4" alt="icon" />}
            </div>
            {subList &&
                <ul>
                    {itemData.subList.map((item, i) =>
                        <li key={i} className="flex items-center hover:bg-gray-100 h-14 pl-10 cursor-pointer">
                            <img src={item.icon} className="w-6 h-6" alt="icon" />
                            <p className="pl-8 text-lg font-sans">{item.name}</p>
                        </li>
                    )}
                </ul>
            }
        </li>
    )
}

ListItem.propTypes = {
    itemData: PropTypes.object.isRequired,
};
