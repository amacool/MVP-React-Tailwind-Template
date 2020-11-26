import React from 'react';
import PropTypes from 'prop-types';

const getAvatarSize = (size) => {
    switch(size) {
        case "small":
            return 10
        case "medium":
            return 12
        case "large":
            return 16
        default:
            return 12
    }
}

const Avatar = ({ altName, imageURL, avatarLabel, bgColor, size }) => {
    const avatarSize = getAvatarSize(size);
    return (
        <div 
        className={imageURL ? `m-2 w-${avatarSize} h-${avatarSize} rounded-full overflow-hidden` : `w-${avatarSize} h-${avatarSize} text-white m-2 flex justify-center items-center text-xl ${bgColor} rounded-full`}>
            {imageURL && altName && <img src={imageURL} alt={altName} />}
            {!imageURL && <p>{avatarLabel}</p>}
        </div>
    )
}

Avatar.propTypes = {
    altName: PropTypes.string,
    imageURL: PropTypes.string,
    avatarLabel: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.string,
};

export default Avatar;
