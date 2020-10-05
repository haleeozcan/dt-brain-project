import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
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
import clsx from "clsx";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from "@material-ui/core/Drawer/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import PeopleIcon from '@material-ui/icons/People';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#B2EBF2",
        opacity: 0.9
},
    menuButton: {
        color: "#101012",
    },
    title: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function MenuAppBar() {
    const [anchor, setAnchor] = React.useState(null);
    const [opens, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


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
    const theme = useTheme();

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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, opens && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.grow} />
                    <Avatar>A</Avatar>
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

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={opens}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem>
                        <Avatar>A</Avatar>
                        <ListItemIcon><Brightness1Icon style={{color: "green"}}/></ListItemIcon>
                        <ListItemText>Aktif</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon><PeopleIcon/></ListItemIcon>
                            <ListItemText>Kullanıcı Listesi</ListItemText>
                        </ListItem>
                </List>

            </Drawer>

        </div>
    );
}