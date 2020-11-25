import React from 'react';
import PropTypes from 'prop-types';

const FolderList = ({ folderListData }) => {
    return (
        <ul className="w-full bg-white px-4 py-4">
            {folderListData.map((item, i) =>
                <li key={i} className="flex flex-row items-center py-2">
                    <div className="w-10 h-10 bg-gray-400 flex justify-center items-center rounded-full">
                        <img src={item.icon} className="w-5 h-5" alt="icon" />
                    </div>
                    <div className="flex flex-col pl-4">
                        <p className="text-lg font-sans leading-6 text-gray-700">{item.name}</p>
                        <p className="text-base text-gray-400 font-sans leading-5">{item.date}</p>
                    </div>
                </li>
            )}
        </ul>
    )
}

FolderList.propTypes = {
    folderListData: PropTypes.array.isRequired,
};

export default FolderList;
