import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#001331",
        backgroundColor: "#fff",
    },
    textField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    mainTitle: {
        color: "#323337",
        textTransform: "uppercase",
    },
}));

function Password() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container justify="center">
            <Grid item xs={3}>
            <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
                Şifreyi Değiştir
                <VpnKeyIcon/>
            </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid>
                    <DialogTitle className={classes.mainTitle}>Şifreyi Değiştir</DialogTitle>
                    <DialogContent>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Yeni Şifre</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button}>
                            Kaydet
                        </Button>
                    </DialogActions>
                </Grid>
            </Dialog>
            <Grid item xs={3}>
                <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
                  < AccountBoxIcon/>
                    Bu Hesapla Giriş Yap
                </Button>
            </Grid>
        </Grid>



    );
}

export default Password;
