import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import PropTypes from "prop-types";

const BottomNavigationWithNoLabel = ({ navigationData }) => {
    const [navData, setNavData] = useState(navigationData);

    const toggleNav = (index) => {
        let newNavData = navData.map(navs => ({ ...navs, selected: false }));
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
                    <p className={`text-blue-600 ${item.selected ? "block" : "hidden"}`}>
                        {item.name}
                    </p>
                </div>
            )}
        </div>
    )
}

BottomNavigationWithNoLabel.propTypes = {
    navigationData: PropTypes.array,
};

export default BottomNavigationWithNoLabel;
