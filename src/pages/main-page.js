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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import AddUser from "./add-user.js";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, tarih) {
    return {name, tarih};
}

const rows = [
    createData('Ahmet Yılmaz', "01.10.2020"),
    createData('Ayşe Çoban', "01.10.2020"),
    createData('Yeliz Öz', "01.10.2020"),
];

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    table: {
        minWidth: 700,
    },
}));

export default function MainPage() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');
    const [open, setOpen] = React.useState(false);
    const [cihaz, setCihaz] = React.useState('');

    const handleOnChange = (event) => {
        setCihaz(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
            <Typography variant="h2">Kullanıcılar </Typography>
            <Typography variant="h5">Kullanıcılar Durum Listesi </Typography>
            <Button variant="outlined" color="primary">
                Kullanıcı Grubu Oluştur
            </Button>

        <AddUser/>

            <Typography variant="h5" align="left">Kullanıcı Grupları </Typography>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Grup #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Typography>Grubun Adı: Grup #1</Typography>
                        <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                        <Button variant="outlined" color="primary">
                            Kullanıcı Grubunu Kaldır
                        </Button>
                    </div>
                    <Divider variant="middle"/>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                    <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.tarih}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcıyı Kaldır</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                                Kullanıcı Durumu
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
                                                            onChange={handleOnChange}
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
                                            </Dialog>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <a href="user.js">
                                                <button> Kullanıcıya Git</button>
                                            </a>

                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Grup #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Typography>Grubun Adı: Grup #2</Typography>
                        <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                        <Button variant="outlined" color="primary">
                            Kullanıcı Grubunu Kaldır
                        </Button>
                    </div>
                    <Divider variant="middle"/>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                    <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.tarih}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcıyı Kaldır</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcı Durumu</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary" href="/user">Kullanıcıya
                                                Git</Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Grup #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Typography>Grubun Adı: Grup #3</Typography>
                        <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                        <Button variant="outlined" color="primary">
                            Kullanıcı Grubunu Kaldır
                        </Button>
                    </div>
                    <Divider variant="middle"/>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                    <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.tarih}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcıyı Kaldır</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcı Durumu</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button variant="outlined" color="primary">Kullanıcıya Git</Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}