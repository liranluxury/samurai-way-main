import profileBackgroundIcon from '../image/background/aic-home.jpg'
import myFoto from './../image/logo/myfoto.jpg'
import classes from './Profile.module.css';
import React from "react";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={profileBackgroundIcon} alt="background"/>
            </div>
            <div>
                <img src={myFoto} alt="my foto"/>
            </div>
            <div>
                <p>My posts</p>
                <p>New posts</p>
            </div>
        </div>
    )
}
