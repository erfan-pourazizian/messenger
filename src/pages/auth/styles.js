import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    main: {
        overflow: 'hidden !important',
        MozOverflow:'hidden !important',
    },
    container: {
        background: "#cfd7e0",
        width: "30rem",
        marginTop : "6rem",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            width: "87%",
        },
        borderRadius: 7,
        direction: 'rtl',
        boxShadow: '0 8px 32px 0 rgb(31 38 135 / 37%)',
    },

    logo: {
        alignSelf: 'center',
        width: '65px',
        marginTop: '5px'
    },
    tab: {
        flex: 1,
        fontSize: '16px',
        fontFamily: 'shabnam !important',
        overflow: 'hidden !important',
        MozOverflow:'hidden !important',
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
        marginTop: '5px',
        color: 'black',
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.8rem'
        },
    },
    iconsParent: {
        textAlign: "center",
        padding: '10px'
    },
    icon: {
        margin: '0 5px 0 5px',
        width: '24px',
        height: '24px'
    },
    inputText: {
        color: 'black',
        overflow: 'hidden !important',
        MozOverflow:'hidden !important',
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.8rem'
        },
    },
    button : {
        backgroundColor: '#31528c',
        "&:hover":{
            backgroundColor: '#467cda',
        }
    },
    formInput: {
        marginBottom: '1rem'
    }
}));


export default useStyles;