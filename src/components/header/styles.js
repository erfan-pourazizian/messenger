import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    header: {
        padding: 18,
        backgroundColor: '#1b2730',
        display: 'flex',
        boxSizing: "border-box"
    },
    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginRight: '0.5rem'
    },
    moreMenu: {
        marginLeft: "0.5rem"
    },
    leftMenu: {
        marginRight: "auto"
    }
}));


export default useStyles;