import profileBackgroundIcon from '../image/background/aic-home.jpg'

import classes from './Profile.module.css';
import React from "react";
const Profile=()=>{
    return (
        <div className={classes.content}>
            <div>
                <img src={profileBackgroundIcon} alt="background"/>
            </div>
            <div>
                <p>Ava+description</p>
                <p>My posts</p>
                <p>New posts</p>
            </div>
        </div>
    )
}
export default Profile;