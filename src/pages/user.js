import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Header.js';
import MainPage from "./main-page";
import Typography from "@material-ui/core/Typography";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import AddUserGroup from "./add-user-group";
import AddUser from "./add-user";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#323337",
        color: "#fff",
        fontSize: 18
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(ad, eklenmeTarihi, aktifTarih, aktiflik) {
    return {ad, eklenmeTarihi, aktifTarih, aktiflik};
}

const rows = [
    createData('Cihaz #1', "01.10.2020", "03.10.2020", "Aktif"),
    createData('Cihaz #2', "01.10.2020", "03.10.2020", "İnaktif"),
    createData('Cihaz #3', "01.10.2020", "03.10.2020", "Kapalı")
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
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
    },
    but: {
        color: "#001331",
        backgroundColor: theme.palette.getContrastText("#001331"),
    },
    mainTitle: {
        color: "#323337",
    },
}));

function User() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [cihaz, setCihaz] = React.useState('');

    const handleChange = (event) => {
        setCihaz(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.mainTitle}>CİHAZLARIN AKTİFLİK DURUMU </Typography>
            <Grid container justify="center">
                <Grid item xs={6} justify="center">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Cihazların Adı</StyledTableCell>
                                    <StyledTableCell align="right">Eklenme Tarihi</StyledTableCell>
                                    <StyledTableCell align="right">En Son Aktif Olduğu Tarih</StyledTableCell>
                                    <StyledTableCell align="right">Aktiflik Durumu</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.ad}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.ad}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.eklenmeTarihi}</StyledTableCell>
                                        <StyledTableCell align="right">{row.aktifTarih}</StyledTableCell>
                                        <StyledTableCell align="right">{row.aktiflik}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <div>
                <br/>
                <Grid container justify="center">
                    <Grid item xs={3}>
                        <Button variant="outlined" size="large" onClick={handleClickOpen} className={classes.button}>
                            Cihaz Ekle
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Cihaz Ekle</DialogTitle>
                            <DialogContent>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Cihaz Türü</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cihaz}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Cihaz #1</MenuItem>
                                        <MenuItem value={20}>Cihaz #2</MenuItem>
                                        <MenuItem value={30}>Cihaz #3</MenuItem>
                                    </Select>
                                </FormControl>
                                <form className={classes.textField} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Cihaz İsmi"/>
                                </form>
                                <form className={classes.textField} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="ID"/>
                                    <TextField id="standard-basic" label="UID"/>
                                </form>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Ekle
                                </Button>
                            </DialogActions>
                        </Dialog> </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="large" className={classes.but}>
                            Cihaz Kaldır
                        </Button>
                    </Grid>
                </Grid>
                <br/>
            </div>
        </div>
    );
}

export default User;
