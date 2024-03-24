import React from 'react';
import myLogo from '../image/logo/myLogoW.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={myLogo} alt="My Logo" />
        </header>
    );
}

export default Header;