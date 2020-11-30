import React from "react";
import PropTypes from "prop-types";

const IconSwitch = ({ tabName, colorName }) => {
    switch (tabName) {
        case "Recents":
            return (
                <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title />
                        <path
                            d="M12.25,2A9.81,9.81,0,0,0,4.77,5.46L3.41,4.25a1,1,0,0,0-1.07-.16A1,1,0,0,0,1.75,5V9a1,1,0,0,0,1,1h4.5a1,1,0,0,0,.93-.64,1,1,0,0,0-.27-1.11L6.26,6.78a7.86,7.86,0,0,1,6-2.78A8,8,0,1,1,4.72,14.67a1,1,0,0,0-1.89.66A10,10,0,1,0,12.25,2Z"
                            fill={colorName}
                        />
                        <path
                            d="M16,16a1,1,0,0,1-.6-.2l-4-3A1,1,0,0,1,11,12V8a1,1,0,0,1,2,0v3.5l3.6,2.7a1,1,0,0,1,.2,1.4A1,1,0,0,1,16,16Z"
                            fill={colorName}
                        />
                    </svg>
                </div>
            );
        case "Favorites":
            return (
                <div className="w-6 h-6">
                    <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 -1028.4)">
                            <path
                                d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                                fill={colorName} />
                        </g>
                    </svg>
                </div>
            );
        case "Nearby":
            return (
                <div className="w-6 h-6">
                    <svg height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                            fill={colorName}
                        />
                        <path
                            d="M0 0h48v48h-48z"
                            fill="none" />
                    </svg>
                </div>
            )
        case "Folder":
            return (
                <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title />
                        <path
                            d="M21,9v9a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V6A2,2,0,0,1,5,4h5.28a2,2,0,0,1,1.9,1.37L12.72,7H19A2,2,0,0,1,21,9Z"
                            fill={colorName}
                        />
                    </svg>
                </div>
            )
    }
}

IconSwitch.propTypes = {
    tabName: PropTypes.string,
    colorName: PropTypes.string,
};

export default IconSwitch;
