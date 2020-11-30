import React, { useState } from "react";
import IconSwitch from "./iconsSwitch";
import PropTypes from "prop-types";

const BottomNavigation = ({ bottomNavigationData }) => {
    const [navData, setNavData] = useState(bottomNavigationData);

    const toggleNav = (index) => {
        let newNavData = [];
        navData.map(navs => {
            newNavData.push({ ...navs, selected: false });
        });
        newNavData[index] = { ...newNavData[index], selected: true };
        setNavData(newNavData);
    }
    return (
        <div className="w-full flex flex-row justify-between items-center bg-white py-4">
            {navData.map((item, i) =>
                <div
                    key={i}
                    onClick={() => toggleNav(i)}
                    className="w-2/6 flex flex-col cursor-pointer items-center">
                      <IconSwitch tabName={item.name} colorName={item.selected ? "#0066ff" : "#737373"} />  
                    <p className={`${item.selected ? "text-blue-600" : "text-gray-600"} ${item.selected ? "text-lg" : "text-base"}`}>
                        {item.name}
                    </p>
                </div>
            )}
        </div>
    )
}

BottomNavigation.propTypes = {
    bottomNavigationData: PropTypes.array,
};

export default BottomNavigation;
