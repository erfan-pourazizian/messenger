import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: '#05141c',
            width: '22%',
            padding: '1.5rem 2rem',
            overflow: "hidden",
            fontSize: '17px',
            scrollbarWidth: 'none',
            overflowY: 'auto',
            [theme.breakpoints.down("sm")]: {
                width: "35%",
            },
            [theme.breakpoints.down("xs")]: {
                width: "80%",
            }
        },
        profText: {
            marginLeft: '0.5rem',
            width: 'max-content',
            direction: 'ltr'
        },
        eachBestUser: {
            width: '100%'
        },
        messengerNameParent: {
            marginRight: '0.5rem',
            width: 'max-content',
            alignItems: "flex-start"
        },
        profName: {
            flex: 1
        },
        profId: {
            flex: 1,
            color: theme.palette.text.hint,
            fontSize: '0.78rem',
            direction: "ltr",
        },
        settingIcon: {
            width: '22px',
            height: '22px',
            marginLeft: '7px',
            marginTop: '3px'
        },
        messengerRoot: {
            background: "#1b2730",
            marginTop: "3rem",
            borderRadius: "2.5rem",
            padding: "11px 24px",
            boxShadow: '0 8px 32px 0 rgb(31 38 135 / 17%)'
        },
        messengerTitle: {
            fontSize: '20px !important',
            fontWeight: "600 !important",
            marginBottom: '11px'
        },
        messengerParent: {
            padding: '10px 0'
        },
        menu: {
            backgroundColor: 'white',
            padding: '1rem',
        },
        messageImg: {
            width: 50,
            height: 50,
            borderRadius: '50%'
        },
        messages: {
            width: "100%",
        },
        profile: {
            width: 50,
            height: 50,
            borderRadius: '50%'
        },
        menuContainer: {
            cursor: 'pointer',
            position: 'sticky',
            top: 0,
            backgroundColor: '#1b2730',
            padding: 20,
            borderRadius: '2.5rem',
            zIndex: 1
        },
        fileInput: {
            display: 'none'
        },
        chip: {
            direction: "ltr",
            marginBottom: '0.7rem',
        },
        bestSub: {
            display: 'flex',
        },
        bestSub_img:{
            width: "36px",
            height: '36px'
        }
    }))
;


export default useStyles;