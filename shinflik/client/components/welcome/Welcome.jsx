import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core';

import '../../css-components/Welcome.css'


const useStyles = makeStyles((theme) => ({
	settingIcon: {
        color: '#992568', 
        float: 'left',  
        "& :hover": {color: '#FF782E'}
	}
}));

export default function Welcome(props) {
    const classes = useStyles()
    return (
        <div className="welcome-header">
            <SettingsIcon className={classes.settingIcon}/><h2 className="welcome">Welcome {props.name}</h2>
        </div>
    )
}
