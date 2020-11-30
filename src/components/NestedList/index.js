import React from 'react';
import { ListItem } from './ListItems';
import PropTypes from 'prop-types';

export const NestedList = ({ nestedListData }) => {
    return (
        <ul className="w-full py-2 bg-white">
            <p className="px-4 py-2 text-gray-700">Nested List Items</p>
            {nestedListData.map((item, i) =>
                <ListItem key={i} itemData={item} />
            )}
        </ul>
    )
}

NestedList.propTypes = {
    nestedListData: PropTypes.array.isRequired,
};

export default NestedList;
