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
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#201c48",
},
    menuButton: {
        color: "#fff",
    },
    title: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar() {
    const [anchor, setAnchor] = React.useState(null);

    const handleOnClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleOnClose = () => {
        setAnchor(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <div>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchor)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Kullanıcı Listesi</MenuItem>
                        </Menu>
                    </div>
                    <div className={classes.grow} />
                    <Avatar>H</Avatar>
                    <IconButton edge="end" aria-label="menu" className={classes.menuButton}>
                        <SettingsIcon/>
                    </IconButton>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOnClick} className={classes.menuButton}>
                        Dil
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchor}
                        keepMounted
                        open={Boolean(anchor)}
                        onClose={handleOnClose}
                    >
                        <MenuItem onClick={handleOnClose}>Türkçe</MenuItem>
                        <MenuItem onClick={handleOnClose}>İngilizce</MenuItem>
                        <MenuItem onClick={handleOnClose}>Almanca</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}