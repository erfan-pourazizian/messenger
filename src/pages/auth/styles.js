import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        background: "white",
        width: "30rem",
        margin: "10rem auto",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            width: "87%",
        },
        direction: 'rtl',
        boxShadow: '0 8px 32px 0 rgb(31 38 135 / 37%)'
    },
    headerText: {
        margin: '1rem',
        alignSelf: 'center',
    },
    tab: {
        flex: 1,
        fontSize: '16px',
        fontFamily: 'shabnam !important'
    },
    containerInput: {
        padding: '1rem 0.8rem',
        display: 'flex',
        flexDirection: 'column'
    }
}));


export default useStyles;