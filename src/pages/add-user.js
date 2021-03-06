import React from 'react';
import '../App.css';
import { makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    table: {
        width: 1000,
    },
    formControl: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    textField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        color: "#001331",
        backgroundColor: theme.palette.getContrastText("#001331"),
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            height: "50%",
        },
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
            fontSize: 13,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 8,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },
    mainTitle: {
        color: "#323337",
        textTransform: "uppercase",
    },
    but: {
        backgroundColor: "#001331",
        color: theme.palette.getContrastText("#001331"),

    },
}));

function AddUser() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [grup, setGrup] = React.useState('');

    const handleOnChange = (event) => {
        setGrup(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" size="large" onClick={handleClickOpen} className={classes.button}>
                <PersonAddIcon/>
                Kullanıcı Oluştur
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title"  className={classes.mainTitle}>Kullanıcı Oluştur</DialogTitle>
                <DialogContent>
                    <form className={classes.textField} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Kullanıcı Adı"/>
                    </form>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Cihaz Türü</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={grup}
                            onChange={handleOnChange}
                        >
                            <MenuItem value={10}>Grup #1</MenuItem>
                            <MenuItem value={20}>Grup #2</MenuItem>
                            <MenuItem value={30}>Grup #3</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.but}>
                        Kullanıcı Oluştur
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddUser;
