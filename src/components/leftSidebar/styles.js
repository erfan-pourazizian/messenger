import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    width: '22%',
    padding: '1.5rem 2rem',
    overflow: "hidden",
    fontSize: '17px',
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
  tweeterNameParent: {
    marginRight: '0.5rem',
    width: 'max-content',
  },
  profName: {
    flex: 1,
  },
  profId: {
    flex: 1,
    color: theme.palette.text.hint,
    fontSize: '0.78rem',
    direction: "ltr",
  },
  settingIcon: {
    width: '16px',
    height: '16px',
    marginLeft: '10px',
    marginTop: '3px'
  },
  tweeterRoot: {
    background: "#d2d4d6",
    marginTop: "3rem",
    borderRadius: "2.5rem",
    padding: "11px 24px",
    boxShadow: '0 8px 32px 0 rgb(31 38 135 / 17%)'
  },
  tweeterTitle: {
    fontSize: '20px !important',
    fontWeight: "600 !important",
    marginBottom: '11px'
  },
  tweeterParent: {
    padding: '10px 0'
  },
  menu: {
    backgroundColor: 'white',
    padding: '1rem',
  },
  twitterImg: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  }
}));


export default useStyles;