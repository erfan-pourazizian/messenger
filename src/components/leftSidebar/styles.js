import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#05141c",
    width: "23%",
    padding: "0 1rem",
    height: '100vh',
    overflow: "hidden",
    fontSize: "17px",
    scrollbarWidth: "none",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  profText: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "max-content",
    direction: "ltr",
    textAlign: "center",
    position: "relative",
    marginTop: "1.6rem",
    paddingBottom: '0.5rem'
  },
  eachBestUser: {
    width: "100%",
  },
  messengerNameParent: {
    marginRight: "0.5rem",
    width: "max-content",
    alignItems: "flex-start",
  },
  profName: {
    fontSize: "1.2rem",
  },
  profId: {
    color: "#4c5b66",
    fontSize: "0.9rem",
    direction: "ltr",
  },
  settingIcon: {
    width: "22px",
    height: "22px",
    marginLeft: "7px",
    marginTop: "3px",
  },
  messengerRoot: {
    background: "#1b2730",
    marginTop: "1.5rem",
    borderRadius: "0.8rem",
    padding: "11px 24px",
    boxShadow: "0 8px 32px 0 rgb(31 38 135 / 17%)",
  },
  messengerTitle: {
    fontSize: "18px !important",
    fontWeight: "600 !important",
    marginBottom: "11px",
  },
  messengerParent: {
    padding: "7px 0",
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  messages: {
    width: "100%",
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    position: "absolute",
    right: "40%",
    left: "50%",
    top: "2.8rem",
  },
  menuContainer: {
    cursor: "pointer",
    position: "sticky",
    top: 0,
    backgroundColor: "#1b2730",
    borderRadius: "0.8rem",
    zIndex: 1,
  },
  fileInput: {
    display: "none",
  },
  chip: {
    direction: "ltr",
    marginBottom: "0.7rem",
  },
  bestSub: {
    display: "flex",
  },
  bestSub_img: {
    width: "36px",
    height: "36px",
  },
  avatar_background: {
    width: "100%",
    height: "4.8rem",
  },
  profButton: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  divider: {
    backgroundColor: "#232f39",
  },
  peopleProfName: {
    fontSize: "1rem",
  },
  peopleProfId: {
    color: "#5b6672",
    fontSize: "0.9rem",
    direction: "ltr",
  },
  messengerButton: {
    borderRadius: '12px !important',
    height: '2rem !important',
    placeSelf: 'center !important',
    backgroundColor: '#f7fcfe !important',
    color: 'black !important',
    marginRight: 'auto !important' 
  },
  
}));
export default useStyles;
