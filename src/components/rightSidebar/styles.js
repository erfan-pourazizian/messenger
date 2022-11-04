import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#1b2730',
    width: '18%',
    padding: '1.5rem 1rem',
    overflow:"hidden !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  logoType: {
    fontSize: '1.25rem !important',
    fontWeight: "600 !important",
    marginRight: '1rem',
    color: '#1690E7'
  },
  hashTagTitle: {
    fontSize: '18px !important',
    fontWeight: "600 !important",
    marginTop: '3rem',
    marginBottom: '1.5rem'
  },
  hashtag: {
    marginRight: '0.8rem',
  },
  hashTagParent: {
    marginBottom: '0.5rem !important',
    padding: "0.15rem !important",
    width: '100%',
    borderRadius: '20%',
    transition: '0.3s',
    "&:hover": {
      background: "#AEA5A570"
  }},
  chip: {
    direction: "ltr",
    marginBottom : '0.7rem',
  }
}));


export default useStyles;