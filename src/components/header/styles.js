import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#05141c",
    display: "flex",
    height: "11vh",
    alignItems: 'center'
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
    marginRight: 'auto',
    marginLeft: '1.5rem',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export default useStyles;
