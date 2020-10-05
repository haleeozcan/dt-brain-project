import React from 'react';
import '../App.css';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import GroupAddIcon from '@material-ui/icons/GroupAdd';

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
        backgroundColor: "#001331",
        color: theme.palette.getContrastText("#001331"),
        height: 95,
        width: 190
    },
    mainTitle: {
        color: "#323337",
        textTransform: "uppercase",
    },
}));

function AddUserGroup() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button  size="large" variant="outlined" onClick={handleClickOpen} className={classes.button}>
                <GroupAddIcon/>
                Kullanıcı Grubu Oluştur
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid>
                    <DialogTitle className={classes.mainTitle}>Kullanıcı Grubu ve Panel</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6">Kullanıcı Grubu</Typography>
                        <form className={classes.textField} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Kullanıcı Grup İsmi"/>
                            <TextField id="standard-basic" label="Kullanıcı Adı"/>
                        </form>
                        <form className={classes.textField} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Şifre"/>
                        </form>
                        <Typography variant="h6">Panel</Typography>
                        <form className={classes.textField} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Kullanıcı Adı"/>
                            <TextField id="standard-basic" label="Şifre"/>
                        </form>
                        <form className={classes.textField} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Email"/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button}>
                            Kullanıcı Grubu Oluştur
                        </Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </div>
    );
}

export default AddUserGroup;
