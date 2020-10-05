import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
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
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import AddUser from "./add-user.js";
import Password from "./password.js";
import AddUserGroup from "./add-user-group.js";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GroupIcon from '@material-ui/icons/Group';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#323337",
        opacity: 0.8,
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
        backgroundColor: "#a0a2ac",
        opacity: 0.8,
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
    mainTitle: {
        color: "#323337",
        textTransform: "uppercase",
    },
    title: {
        color: "#0083ab",
        textTransform: "uppercase",
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    table: {
        minWidth: 700,
    },
    groupInfo: {
        backgroundColor: "#d1d4e1",
    },
    button: {
        backgroundColor: "#001331",
        color: theme.palette.getContrastText("#001331"),
    },
    but: {
        color: "#001331",
        backgroundColor: theme.palette.getContrastText("#001331"),
    },
    container: {
        height: 500,
        minWidth: 1700,
        backgroundColor: "#fdffff",
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
    photo: {
        width:1040,
        height:500,
        opacity: 0.90
    }

}));


export default function MainPage() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');
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
            <Container fixed className={classes.container}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h2" className={classes.mainTitle}>Kullanıcılar </Typography><br/>
                        <Typography variant="h5" className={classes.title}>Kullanıcılar Durum Listesi </Typography><br/>
                        <Grid container justify="center" spacing={4}>
                            <Grid item xs={3}>
                                <AddUserGroup/>
                            </Grid>
                            <Grid item xs={3}>
                                <AddUser/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://www.trainingzone.co.uk/sites/default/files/learning_technology_solutions_0.jpg" className={classes.photo}/>
                    </Grid>
                </Grid>
            </Container>
            <Typography variant="h5" align="left" className={classes.title}>Kullanıcı Grupları </Typography>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{fontSize: 20}}> Grup #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container justify="center" spacing={3}>
                        <Grid container item xs={12} justify="center" className={classes.groupInfo}>
                            <GroupIcon/>
                            <Grid item xs={3}>
                                <Typography>Grubun Adı: Grup #1</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" color="primary" className={classes.button}>
                                    <DeleteIcon/>
                                    Kullanıcı Grubunu Kaldır
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container item xs={12}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                            <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
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
                                                    <Button variant="outlined" color="primary"
                                                            className={classes.button}><DeleteIcon/>
                                                        Kullanıcıyı
                                                        Kaldır</Button>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary"
                                                            onClick={handleClickOpen} className={classes.but}>
                                                        <AssignmentIndIcon/>
                                                        Kullanıcı Durumu
                                                    </Button>
                                                    <Dialog open={open} onClose={handleClose}
                                                            aria-labelledby="form-dialog-title">
                                                        <DialogTitle id="form-dialog-title">Cihaz Ekle</DialogTitle>
                                                        <DialogContent>
                                                            <FormControl className={classes.formControl}>
                                                                <InputLabel id="demo-simple-select-label">Cihaz
                                                                    Türü</InputLabel>
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
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="Cihaz İsmi"/>
                                                            </form>
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="ID"/>
                                                                <TextField id="standard-basic" label="UID"/>
                                                            </form>

                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} color="primary"
                                                                    className={classes.button}>
                                                                Ekle
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary" href="/user"
                                                            className={classes.button}>
                                                        Kullanıcıya Git<ChevronRightIcon/></Button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Password/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography style={{fontSize: 20}}>Grup #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container justify="center" spacing={3}>
                        <Grid container item xs={12} justify="center" className={classes.groupInfo}>
                            <GroupIcon/>
                            <Grid item xs={3}>
                                <Typography>Grubun Adı: Grup #2</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" color="primary" className={classes.button}>
                                    <DeleteIcon/>
                                    Kullanıcı Grubunu Kaldır
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container item xs={12}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                            <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
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
                                                    <Button variant="outlined" color="primary"
                                                            className={classes.button}><DeleteIcon/>
                                                        Kullanıcıyı Kaldır</Button>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary"
                                                            onClick={handleClickOpen} className={classes.but}>
                                                        <AssignmentIndIcon/>
                                                        Kullanıcı Durumu
                                                    </Button>
                                                    <Dialog open={open} onClose={handleClose}
                                                            aria-labelledby="form-dialog-title">
                                                        <DialogTitle id="form-dialog-title">Cihaz Ekle</DialogTitle>
                                                        <DialogContent>
                                                            <FormControl className={classes.formControl}>
                                                                <InputLabel id="demo-simple-select-label">Cihaz
                                                                    Türü</InputLabel>
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
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="Cihaz İsmi"/>
                                                            </form>
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="ID"/>
                                                                <TextField id="standard-basic" label="UID"/>
                                                            </form>

                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} color="primary"
                                                                    className={classes.button}>
                                                                Ekle
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary" href="/user"
                                                            className={classes.button}>Kullanıcıya Git<ChevronRightIcon/></Button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Password/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography style={{fontSize: 20}}>Grup #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container justify="center" spacing={3}>
                        <Grid container item xs={12} justify="center" className={classes.groupInfo}>
                            <GroupIcon/>
                            <Grid item xs={3}>
                                <Typography>Grubun Adı: Grup #3</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Oluşturulma tarihi: 01.10.2020</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" color="primary" className={classes.button}>
                                    <DeleteIcon/>
                                    Kullanıcı Grubunu Kaldır
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container item xs={12}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Kullanıcı Adı</StyledTableCell>
                                            <StyledTableCell align="right">Oluşturulma Tarihi</StyledTableCell>
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
                                                    <Button variant="outlined" color="primary"
                                                            className={classes.button}>
                                                        <DeleteIcon/>
                                                        Kullanıcıyı Kaldır</Button>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary"
                                                            onClick={handleClickOpen} className={classes.but}>
                                                        <AssignmentIndIcon/>
                                                        Kullanıcı Durumu
                                                    </Button>
                                                    <Dialog open={open} onClose={handleClose}
                                                            aria-labelledby="form-dialog-title">
                                                        <DialogTitle id="form-dialog-title">Cihaz Ekle</DialogTitle>
                                                        <DialogContent>
                                                            <FormControl className={classes.formControl}>
                                                                <InputLabel id="demo-simple-select-label">Cihaz
                                                                    Türü</InputLabel>
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
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="Cihaz İsmi"/>
                                                            </form>
                                                            <form className={classes.textField} noValidate
                                                                  autoComplete="off">
                                                                <TextField id="standard-basic" label="ID"/>
                                                                <TextField id="standard-basic" label="UID"/>
                                                            </form>

                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} color="primary"
                                                                    className={classes.button}>
                                                                Ekle
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Button variant="outlined" color="primary" href="/user"
                                                            className={classes.button}>
                                                        Kullanıcıya Git<ChevronRightIcon/></Button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Password/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}