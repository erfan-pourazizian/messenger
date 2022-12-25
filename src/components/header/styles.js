import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#05141c",
    display: "flex",
    height: "11vh",
    alignItems: "center",
  },
  moreMenu: {
    marginLeft: "0.5rem",
    marginRight: "1rem",
  },
  leftMenu: {
    marginRight: "auto",
    marginLeft: "1rem",
  },
  logo: {
    width: "36px",
    height: "36px",
    marginRight: "auto",
    marginLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      position: "absolute",
      top: "20px",
      right: "50%",
      left: "45%",
    },
  },
  container: {
    backgroundColor: "#2a3843",
    width: "fit-content",
    borderRadius: "15px",
    padding: "3px 3px",
    marginRight: "2rem",
    cursor: 'pointer',
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  profile: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    marginRight: "0.5rem",
    placeSelf: "center",
    objectFit: "cover"
  },
  arrow: {
    width: "8px",
    height: "8px",
    placeSelf: "center",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  dialogProfile: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  dialogUser: {
    color: "black !important",
    marginLeft: "1.5rem !important",
  },
  user: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  divider: {
    height: "50%",
    backgroundColor: "#1e323f",
    marginRight: "0.5rem",
  },
  messengerButton: {
    borderRadius: "12px !important",
    height: "2rem !important",
    placeSelf: "center !important",
    backgroundColor: "#f7fcfe !important",
    color: "black !important",
    marginRight: "1.5rem !important",
    cursor: 'pointer',
    padding: "3px 3px",
  },
  desktop: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  homeIcon: {
    width: "24px",
    height: "24px",
    marginRight: '0.3rem'
  },
}));

export default useStyles;
