import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    main: {
        overflow: 'hidden !important',
        MozOverflow:'hidden !important',
    },
    container: {
        background: "white",
        width: "30rem",
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            width: "87%",
        },
        direction: 'rtl',
        boxShadow: '0 8px 32px 0 rgb(31 38 135 / 37%)',
    },

    logo: {
        alignSelf: 'center',
        width: '80px'
    },
    tab: {
        flex: 1,
        fontSize: '16px',
        fontFamily: 'shabnam !important'
    },
    containerInput: {
        padding: '1rem 0.8rem 0.1rem 0.8rem',
        display: 'flex',
        flexDirection: 'column'
    },
    markIcon: {
        marginRight: '-11px'
    },
    socialMedia: {
        marginTop: '20px',
    },
    divider: {
        marginLeft: '10%',
        marginRight: '10%'
    },
    dividerText: {
        textAlign: 'center',
        marginTop: '5px'
    },
    iconsParent: {
        textAlign: "center",
        margin: '10px',
        padding: '10px'
    },
    icon: {
        margin: '0 10px 0 10px',
        width: '30px',
        height: '30px'
    }
}));


export default useStyles;