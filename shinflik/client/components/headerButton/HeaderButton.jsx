import React from 'react'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core'

import '../../css-components/HeaderButton.css'


const useStyles = makeStyles((theme) => ({
	hb: {
        backgroundColor: '#992568',
        color: 'whitesmoke',
        height: '40px',
        width: 'fit-content',
        float: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginTop: '10px'
	}
}));


export default function HeaderButton(props) {
    const classes = useStyles()
    return (
        <div className="header-button">
            <Chip label={props.text} className={classes.hb}/>
        </div>
    )
}
