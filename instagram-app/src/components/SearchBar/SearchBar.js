import React from 'react';
import '../SearchBar/SearchBar.css';
import instaLogo from '../../Images/instaLogo.jpg';
import instagramTypography from '../../Images/instagramTypography.jpg';
import verticalBar from '../../Images/verticalBar.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBarContainer'>

            <img src={instaLogo} alt="instaLogo"></img>
            <img src={verticalBar} alt="verticalBar"></img>
            <img src={instagramTypography} alt="instagramTypo"></img>

            <input></input>
            {/* <img src={instaLogo} alt="Insta-Logo"></img>
            <img src={instaLogo} alt="Insta-Logo"></img> */}
            <img></img>

        </div>
    );
};

export default SearchBar;