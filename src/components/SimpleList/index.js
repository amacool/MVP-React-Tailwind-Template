import React from 'react';
import PropTypes from 'prop-types';

export const SimpleList = ({ simpleListData }) => {
    return (
        <div className="w-full bg-white flex flex-col">
            <ul className="w-full border-b border-gray-400 py-2">
                {simpleListData.listWithIcon.map((item, i) =>
                    <li key={i} className="w-full flex flex-row justify-start items-center px-4 h-14 hover:bg-gray-100 cursor-pointer">
                        <img src={item.icon} className="w-6 h-6" alt="icon" />
                        <p className="pl-8 text-lg font-sans">{item.name}</p>
                    </li>
                )}
            </ul>
            <ul className="w-full py-2">
                {simpleListData.listWithoutIcon.map((item, i) =>
                    <li key={i} className="w-full flex flex-row justify-start items-center px-4 h-14 hover:bg-gray-100 cursor-pointer">
                        <p className="text-lg font-sans">{item}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

SimpleList.propTypes = {
    simpleListData: PropTypes.object.isRequired,
};

export default SimpleList;
