import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#05141c",
  },
  header: {
    padding: 18,
    backgroundColor: "red",
    display: "flex",
  },
  headerTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginRight: "0.5rem",
  },
  divider: {
    backgroundColor: "#7EBAFF",
    filter: "opacity(0.18)",
  },
  newMessage: {
    padding: 18,
    display: "flex",
    flexDirection: "column",
    background: "#1b2730",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
  messageItem: {
    padding: 18,
    backgroundColor: "#1b2730",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 1px 0 rgb(31 38 135 / 37%)",
    borderRadius: 7,
    margin: "1rem 1rem 1rem 1rem",
    marginTop: "0.5rem",
    transition: "0.3s",
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: "50%",
  },
  messageContainer: {
    flex: 1,
    marginRight: "1rem",
  },
  input: {
    marginRight: "1rem",
    border: "none",
    flex: 1,
    fontWeight: 400,
    "&:focus": {
      outline: "unset",
    },
    caretColor: "cornflowerblue",
    background: "transparent",
  },
  newMessageBtn: {
    color: "white !important",
    borderRadius: "1rem !important",
    minHeight: "30px !important",
    height: "30px !important",
    fontFamily: "shabnam !important",
    lineHeight: "1rem !important",
    minWidth: "5rem !important",
  },
  copyGrid: {
    marginTop: 16,
    alignItems: "center",
  },
  newMessageImgBtn: {
    padding: "0.2rem !important",
    marginLeft: "1rem",
    marginRight: "-1rem",
    width: "26px",
    height: "26px",
  },
  newMessageLike: {
    padding: "0.2rem !important",
    marginLeft: "1rem !important",
    width: "40px",
    height: "32px",
    overflow: "hidden",
  },
  newMessageLike_icon: {
color: '#f50057'
  },
  likeCount: {
    fontSize: "0.8rem",
    color: theme.palette.text.hint,
    marginLeft: "-1rem",
  },
  messageItemName: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
  },
  messageItemId: {
    fontSize: "0.9rem",
    color: theme.palette.text.hint,
    marginRight: "0.5rem",
    marginTop: "0.75rem",
  },
  messageText: {
    fontSize: "1rem",
  },
  messageImg: {
    width: "100%",
    height: "9rem",
    marginTop: "1rem",
    backgroundSize: "contain",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  },
  messengerProfile: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  buttonSection: {
    marginTop: 16,
  },
  Snackbar: {
    overflow: 'hidden'
  }
}));

export default useStyles;
