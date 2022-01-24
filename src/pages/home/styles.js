import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F7F9F9',
    },
    header: {
        padding: 18,
        backgroundColor: 'red',
        display: 'flex'
    },
    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginRight: '0.5rem',
    },
    divider: {
        backgroundColor: '#7EBAFF',
        filter: 'opacity(0.18)'
    },
    newTweet: {
        padding: 18,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba( 255, 255, 255, 0.25 )',
        // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',

    },
    tweetItem: {
        padding: 18,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem',
        "&:hover": {
            backgroundColor: '#F7F7F7'
        }
    },
    input: {
        marginRight: '1rem',
        border: 'none',
        flex: 1,
        fontWeight: 400,
        "&:focus": {
            outline: 'unset',
        },
        caretColor: 'cornflowerblue',
        background: 'transparent',
    },
    newTweetBtn: {
        color: "white !important",
        borderRadius: "1rem !important",
        minHeight: "30px !important",
        height: "30px !important",
        fontFamily: "shabnam !important",
        lineHeight: "1rem !important",
        minWidth: "5rem !important"
    },
    newTweetImg: {},
    newTweetImgBtn: {
        borderRadius: "50%",
        padding: "0.2rem !important",
        // border: "0.5px solid #3337",
        marginLeft: "1rem",
        width: "32px",
        height: "32px"
    },
    tweetItemName: {
        fontSize: "1.2rem",
        marginTop: '0.5rem'
    },
    tweetItemId: {
        fontSize: '0.9rem',
        color: theme.palette.text.hint,
        marginRight: '0.5rem',
        marginTop:'0.9rem',
    },
    tweetText: {
        fontSize: '1rem',

    },
    likeCount: {
        fontSize: '0.8rem',
        color: theme.palette.text.hint,
        marginLeft: '0.5rem',
    },
    tweetImg: {
        width: '100%', height: 'auto',
        marginTop: '1rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',

    }
}));


export default useStyles;