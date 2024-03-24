import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar =()=>{
    return(
        <nav className={classes.nav}>
            <ul className={classes.navitem}>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    )
}
export default Sidebar;