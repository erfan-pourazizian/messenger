import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#05141c",
  },
  header: {
    padding: 18,
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
    marginRight: "1rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1rem",
    },
  },
  messageItem: {
    padding: 18,
    backgroundColor: "#1b2730",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 1px 0 rgb(31 38 135 / 37%)",
    borderRadius: 7,
    margin: "1rem 1rem 1rem 0rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
    },
    marginTop: "0.5rem",
    transition: "0.3s",
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    objectFit: "cover"

  },
  messageContainer: {
    flex: 1,
    marginRight: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  input: {
    marginRight: "0.7rem",
    border: "none",
    fontSize: "1.1rem",
    flex: 1,
    fontWeight: 400,
    color: "white",
    "&::placeholder": {
      color: "white",
    },
    "&:focus": {
      outline: "unset",
    },
    caretColor: "cornflowerblue",
    background: "#28353e",
    borderRadius: "0.8rem",
  },
  newMessageBtn: {
    color: "white !important",
    backgroundColor: "#467496 !important",
    borderRadius: "0.4rem !important",
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
    placeSelf: "center",
  },
  newMessageLike: {
    padding: "0.2rem !important",
    marginLeft: "1rem !important",
    width: "40px",
    height: "32px",
    overflow: "hidden",
  },
  newMessageLike_icon: {
    color: "#e9e6e7",
  },
  likeCount: {
    fontSize: "0.8rem",
    color: "#56646f",
    marginLeft: "-1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  messageItemName: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  messageItemId: {
    fontSize: "0.9rem",
    color: "#414f5a",
    marginRight: "0.5rem",
    marginTop: "0.75rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  messageText: {
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  messageImg: {
    width: "99%",
    height: "20rem",
    marginTop: "1rem",
    borderRadius: "1rem",
    backgroundSize: "contain",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    border: "1px solid #75787e",
    [theme.breakpoints.down("sm")]: {
      height: "10rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "8rem",
    },
  },
  messengerProfile: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover"
  },
  buttonSection: {
    marginTop: 16,
  },
  Snackbar: {
    overflow: "hidden",
  },
  date: {
    marginLeft: "auto",
    fontSize: "1rem",
    color: "#56646f",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}));

export default useStyles;
