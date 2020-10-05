import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#201c48",
    },

    title: {
        color: "#fdffff"
    },
    grow: {
        flexGrow: 1,
    },
    photo: {
        width:150,
        height:100,
        opacity: 0.90
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        2020 © DT Bilişim Grubu. Tüm hakları saklıdır.
                    </Typography>
                    <div className={classes.grow} />
                    <img
                        src="data:image/png;base64,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"
                       className={classes.photo}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}